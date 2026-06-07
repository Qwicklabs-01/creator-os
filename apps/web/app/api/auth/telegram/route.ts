import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createAdminClient } from '../../../utils/supabase/admin';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!botToken) {
      return NextResponse.json({ error: 'Telegram Bot Token not configured' }, { status: 500 });
    }

    // 1. Verify the Telegram hash
    const { hash, ...data } = payload;
    
    if (!hash) {
      return NextResponse.json({ error: 'Missing hash' }, { status: 400 });
    }

    const dataCheckArr = Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .sort()
      .join('\n');

    const secretKey = crypto.createHash('sha256').update(botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckArr).digest('hex');

    if (calculatedHash !== hash) {
      return NextResponse.json({ error: 'Invalid authorization' }, { status: 401 });
    }

    // 2. Check auth date to prevent replay attacks (1 hour expiry)
    const authDate = parseInt(data.auth_date);
    const now = Math.floor(Date.now() / 1000);
    if (now - authDate > 3600) {
      return NextResponse.json({ error: 'Authorization expired' }, { status: 401 });
    }

    // 3. Create or find user using Supabase Admin Client
    const supabaseAdmin = createAdminClient();
    const telegramId = data.id;
    const mockEmail = `telegram_${telegramId}@telegram.local`;
    const mockPassword = crypto.randomBytes(32).toString('hex'); // Generate a random password

    // Try to find the user first
    let { data: users, error: findError } = await supabaseAdmin.auth.admin.listUsers();
    
    let user = users?.users.find(u => u.email === mockEmail);

    if (!user) {
      // User doesn't exist, create them
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email: mockEmail,
        password: mockPassword,
        email_confirm: true,
        user_metadata: {
          telegram_id: telegramId,
          full_name: data.first_name + (data.last_name ? ` ${data.last_name}` : ''),
          username: data.username,
        }
      });

      if (createError) {
        throw createError;
      }
      user = newUser.user;
    }

    // 4. Generate a magic link to get a session
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'magiclink',
      email: mockEmail,
    });

    if (linkError) {
      throw linkError;
    }

    // Return the hashed token part of the link so the frontend can verify it
    // The link looks like: https://[project].supabase.co/auth/v1/verify?token=[token]&type=magiclink
    const url = new URL(linkData.properties?.action_link || "");
    const token = url.searchParams.get('token');

    if (!token) {
      throw new Error("Failed to extract token from magic link");
    }

    return NextResponse.json({ 
      success: true, 
      token,
      email: mockEmail
    });

  } catch (error: any) {
    console.error('Telegram auth error:', error);
    return NextResponse.json({ error: error.message || 'Authentication failed' }, { status: 500 });
  }
}
