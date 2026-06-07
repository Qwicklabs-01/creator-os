import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = streamText({
      model: google('gemini-1.5-flash'),
      system: 'You are a professional content creator, expert in marketing, copywriting, and social media growth. Provide high-quality, engaging content based on the user request. Keep it concise unless specifically asked otherwise.',
      prompt: prompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('AI Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
