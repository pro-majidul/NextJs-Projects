import dbConnect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const data = await params;
    // console.log(data.id)
    const result = await dbConnect('items').findOne({ _id: new ObjectId(data.id) })
    return Response.json( result )

}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const filter = { _id: new ObjectId(id) }
    const data = await request.json()
    const updateDoc = {
        $set: data
    }
    const result = await dbConnect('items').updateOne(filter, updateDoc, { upsert: true })
    return Response.json( result )
}
export async function DELETE(request, { params }) {
    const { id } = await params
    const filter = { _id: new ObjectId(id) }
    const result = await dbConnect('items').deleteOne(filter)
    return Response.json( result )
}