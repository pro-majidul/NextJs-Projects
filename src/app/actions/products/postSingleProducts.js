"use server"

import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export const postSingleProducts = async (postadeData) => {
    try {

        const data = await dbConnect('items').insertOne(postadeData)
         revalidatePath('/product')
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}