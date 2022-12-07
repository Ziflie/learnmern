// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "mongoose";
import { connectMongo, MONGO_URI } from "../../database/conn"
import { MongoClient } from "mongodb";
 
 
export default async (req, res) => {

  try {
  connectMongo()
  const client = new MongoClient(MONGO_URI)
  const db = client.db("sample_mflix")
  const movies = await db
  .collection("movies")
  .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();

        res.json(movies);
     } catch (e) {
        console.error(e);
    }

  }
 