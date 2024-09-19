import * as mongo from "mongodb";

export abstract class DB {
  protected client: any;

  abstract findOneRecord(queryParams: any): any;
  abstract writeRecord(data: any): Promise<boolean>;
}

export type UrlSchema = {
  b64Hash: string;
  url?: string;
};

export default class MongoDBObj extends DB {
  client: mongo.Collection;

  constructor(url: string) {
    try {
      super();
      const mongoClient = new mongo.MongoClient(url);
      this.client = mongoClient.db("jellyware").collection("urlshortener");
      console.log("init mongo passed");
    } catch {
      throw new Error("not URL passed into constructor of MongoDBObj");
    }
  }

  async findOneRecord(queryParams: UrlSchema) {
    try {
      return await this.client.findOne(queryParams);
    } catch {
      throw new Error("failed to fetch a record from the database");
    }
  }

  async writeRecord(data: UrlSchema): Promise<boolean> {
    try {
      await this.client.insertOne(data);
      return true;
    } catch {
      throw new Error("failed to write a new record to the database");
    }
  }
}
