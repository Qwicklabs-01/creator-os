import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, aspectRatio = '1:1' } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Determine dimensions based on aspect ratio
    let width = 1024;
    let height = 1024;

    if (aspectRatio === '16:9') {
      width = 1024;
      height = 576;
    } else if (aspectRatio === '9:16') {
      width = 576;
      height = 1024;
    }

    // Pollinations AI endpoint (100% Free, No API Key Required)
    const encodedPrompt = encodeURIComponent(prompt);
    // Adding a random seed ensures we get a different image every time
    const seed = Math.floor(Math.random() * 1000000);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&seed=${seed}`;

    // Return the URL directly to the frontend
    return NextResponse.json({ url: imageUrl });
  } catch (error: any) {
    console.error('Image AI Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate image' }, { status: 500 });
  }
}
