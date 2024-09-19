import { UrlSchema, DB } from "../db/mongo_funcs";
const cryptol = require("crypto");

// generates hash for the url
// converts hash output to base64 url string
function encodeURL(url: string): string {
  // produces 128 bit hash -> converted into a base64
  const hash = cryptol.createHash("MD5");

  // return 22 chaar string
  // the binary number from hash = base64url
  return hash.update(url).digest("base64url");
}

export async function getURL(
  b64Hash: string,
  db: DB
): Promise<string | undefined> {
  try {
    // validate b64Hash
    const regex = /[A-Za-z0-9-_%]{22}/g;

    if (regex.test(b64Hash)) throw new Error("invalid hash");

    // check if in db
    const params: UrlSchema = {
      b64Hash: b64Hash,
    };
    const dbResult = await db.findOneRecord(params);

    if (dbResult) return dbResult.url;
    else {
      throw new Error("URL not found in db");
    }
  } catch {
    return undefined;
  }
}

export async function createURL(
  url: string,
  db: DB
): Promise<string | undefined> {
  try {
    // validate url
    const regex =
      /^(http|https):\/\/[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(:[0-9]+)?(\/[$\-_\.\+\!\*\'\(\)\&\?=:%A-Za-z0-9]*)*$/;
    if (regex.test(url)) throw new Error("invalid url");

    // create hash of url
    const b64Hash = encodeURL(url);

    const dbObj: UrlSchema = {
      b64Hash: b64Hash,
      url: url,
    };

    // check if in db
    const result = await db.findOneRecord(dbObj);
    // add it if not in db
    if (result == null) await db.writeRecord(dbObj);

    // send correct if it does
    return b64Hash;
  } catch {}

  return undefined;
}
