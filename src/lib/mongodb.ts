import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  }

  return new MongoClient(uri).connect();
}

let clientPromise: Promise<MongoClient> | undefined;

export default function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    clientPromise = createClientPromise();
  }
  return clientPromise;
}
