import { NextResponse } from 'next/server';
import { searchFestivals } from '../../../lib/festivals';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Query parameter "q" is required.' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const results = searchFestivals(query);

    return NextResponse.json(
      {
        success: true,
        query,
        count: results.length,
        data: results,
      },
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}