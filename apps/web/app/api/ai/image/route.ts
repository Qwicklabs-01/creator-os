import { NextResponse } from 'next/server';

export const maxDuration = 60;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400, headers: corsHeaders });
    }

    if (!process.env.HUGGINGFACE_API_KEY) {
      return NextResponse.json({ error: 'Hugging Face API key is not configured.' }, { status: 500, headers: corsHeaders });
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Hugging Face API Error: ${errorText}`);
    }

    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64}`;

    return NextResponse.json({ url: imageUrl }, { headers: corsHeaders });
  } catch (error: any) {
    console.error('Image AI Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate image' }, { status: 500, headers: corsHeaders });
  }
}
