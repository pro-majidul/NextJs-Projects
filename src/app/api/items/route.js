import dbConnect from "@/app/lib/dbConnect"

export async function GET() {
    const data = await dbConnect('items')
    const response = await data.find({}).toArray()
    return Response.json(response)
}

export async function POST(req) {
    const data = await req.json()
    const result = await dbConnect('items').insertOne(data)

    return Response.json(result)
}