import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let db = null;

export const connect = async (done) => {
  const url = process.env.MONGO_DB_URL;
  const dbName = process.env.DB_NAME || "myBlogDB"; // Using environment variable for dbName

  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
    console.log("Database connection established");
    done();
  } catch (error) {
    console.error("Database connection failed: ", error);
    done(error);
  }
};

export { db };
