import { NextResponse } from 'next/server';
import Replicate from 'replicate';

export const maxDuration = 300; // Video generation takes a long time

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json({ error: 'Replicate API token is not configured.' }, { status: 500 });
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    // We use a standard text-to-video model on Replicate
    // cjwbw/damo-text-to-video is a fast standard one
    const output = await replicate.run(
      "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
      {
        input: {
          prompt: prompt,
          num_frames: 24,
          num_inference_steps: 25
        }
      }
    );

    return NextResponse.json({ url: output });
  } catch (error: any) {
    console.error('Video AI Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate video' }, { status: 500 });
  }
}
