import { NextResponse } from 'next/server';
import Replicate from 'replicate';

export const maxDuration = 60; // Images can take a bit longer

export async function POST(req: Request) {
  try {
    const { prompt, aspectRatio = '1:1' } = await req.json();

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json({ error: 'Replicate API token is not configured.' }, { status: 500 });
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    // We use standard SDXL or Flux for great product shots
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: prompt,
          aspect_ratio: aspectRatio,
          output_format: "webp",
          output_quality: 90,
        }
      }
    );

    // output from flux-schnell is an array of image URLs
    const imageUrl = Array.isArray(output) ? output[0] : output;

    return NextResponse.json({ url: imageUrl });
  } catch (error: any) {
    console.error('Image AI Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate image' }, { status: 500 });
  }
}
