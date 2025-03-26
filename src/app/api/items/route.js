import dbConnect from "@/app/lib/dbConnect"

export async function GET() {
    const data = await dbConnect('users')
    const response = await data.find({}).toArray()
    return Response.json(response)
}

export async function POST(req) {
    const data = await req.json()

    return Response.json({ data })
}