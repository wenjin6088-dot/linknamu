import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "linknamu";
const COLLECTION = "linkClicks";

type ClickDoc = {
  _id: string;
  count: number;
};

async function getCollection() {
  const client = await clientPromise;
  return client.db(DB_NAME).collection<ClickDoc>(COLLECTION);
}

export async function GET() {
  const collection = await getCollection();
  const docs = await collection.find({}).toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const { href } = await request.json();

  if (!href || typeof href !== "string") {
    return NextResponse.json({ error: "href가 필요합니다." }, { status: 400 });
  }

  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: href },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ href, count: result?.count ?? 1 });
}
