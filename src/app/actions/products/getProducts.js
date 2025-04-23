"use server"

import dbConnect from "@/app/lib/dbConnect"

export const getProducts = async () => {
    try {
        const data = await dbConnect('items').find({}).toArray()
        return data
    } catch (error) {
        console.log(error)
        return []
    }

}