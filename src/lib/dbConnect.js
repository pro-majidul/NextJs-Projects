import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const dbConnect = (CollectionName) => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_Name).collection(CollectionName)
}

export default dbConnect;