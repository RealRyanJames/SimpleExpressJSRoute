import { MongoClient } from "mongodb";

class URIClient {
  private uri: string = "";
  constructor(uri: string) {
    this.uri = uri.toLowerCase();
  }

  getURIFromClient() {
    return this.uri;
  }
}

export async function getOnClient(data: string, uri: string) {
  const uriUser = new URIClient("mongodb://localhost:27017");

  const client = new MongoClient(uriUser.getURIFromClient());
  const db = client.db("ColorCode");
  const coll = db.collection("code");
  await coll.insertOne({ color_code: data });
}
