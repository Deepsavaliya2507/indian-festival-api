import { NextResponse } from 'next/server';
import { getAllFestivals, filterFestivals } from '../../../lib/festivals';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      month: searchParams.get('month'),
      religion: searchParams.get('religion'),
      state: searchParams.get('state'),
      type: searchParams.get('type'),
      national_holiday: searchParams.get('national_holiday'),
      date: searchParams.get('date'),
      upcoming: searchParams.get('upcoming'),
      tag: searchParams.get('tag'),
    };

    const hasFilters = Object.values(filters).some((v) => v !== null);
    const festivals = hasFilters ? filterFestivals(filters) : getAllFestivals();

    return NextResponse.json(
      {
        success: true,
        count: festivals.length,
        data: festivals,
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