import {NextResponse} from "next/server";
import trips from '@data/trips.json';
import * as fs from "fs";

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json(trips);
}

export async function POST(request: Request) {
  const newTrip: any = await request.json()
  trips.push({...newTrip, id: trips.length+1, img: 'https://pohod-v-gory.com/wp-content/uploads/2022/09/14-29-600x532.jpg'})
  await fs.writeFileSync('data/trips.json', JSON.stringify(trips) )
  return NextResponse.json(trips);
}
