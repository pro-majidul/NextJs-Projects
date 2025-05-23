"use client"

import { postSingleProducts } from "@/app/actions/products/postSingleProducts";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
    const router = useRouter()
    const handelSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.product_name.value;
        const paylode = { category }
        // const res = await fetch('http://localhost:3000/api/items', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": 'application/json'
        //     },
        //     body: JSON.stringify(paylode)
        // })
        // const data = await res.json()
        const data = await postSingleProducts(paylode)
        if (data.insertedId) {
            form.reset()
            router.push('/product')
        }
    }
    return (
        <div>
            <form
                onSubmit={handelSubmit} action="">
                <input className=" p-2 border bg-white  text-black rounded-sm" type="text" name='product_name' placeholder='Enter your Product name ' />
                <button className="p-2 border bg-amber-300 rounded-sm text-black hover:bg-amber-400" type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProductForm;