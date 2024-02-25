import {NextResponse} from "next/server";
import trips from '@data/trips.json';

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json(trips);
}
