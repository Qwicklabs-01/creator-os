import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the webhook payload from Supabase
    const payload = await request.json();
    
    // Extract the phone number and OTP from the payload
    const phone = payload.user?.phone || payload.phone;
    const otp = payload.sms?.otp;

    if (!phone || !otp) {
      return NextResponse.json({ error: 'Missing phone or OTP' }, { status: 400 });
    }

    // Clean the phone number to use as the ntfy topic (remove '+' and spaces)
    const cleanPhone = phone.replace(/\D/g, '');
    const topic = `creator_os_${cleanPhone}`;

    // Send the push notification via ntfy.sh
    const response = await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      body: `Your Creator OS login code is: ${otp}`,
      headers: {
        'Title': 'Creator OS Login',
        'Tags': 'key',
      }
    });

    if (!response.ok) {
      throw new Error(`ntfy.sh responded with ${response.status}`);
    }

    // Return success to Supabase so it knows the "SMS" was sent
    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error('Error sending SMS via ntfy:', error);
    return NextResponse.json({ error: 'Failed to send SMS' }, { status: 500 });
  }
}
