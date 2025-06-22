// /pages/api/weatherCache/route.ts (or /app/api/weatherCache/[id]/route.ts for Next 13+)
import { NextResponse } from 'next/server';
import { weatherStore } from '@/lib/weatherCache'; // your Map

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log('id', id);
  console.log('weatherStore', weatherStore);
  const data = weatherStore.get(id);
  if (!data) {
    return NextResponse.json({ error: 'Data not found' }, { status: 404 });
  }
  return NextResponse.json(data);
}
