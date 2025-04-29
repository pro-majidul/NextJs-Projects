// import { redirect } from 'next/navigation';
import React from 'react';
import dbConnect from '../../lib/dbConnect';
import { getProducts } from '../actions/products/getProducts';
import { Fira_Mono } from 'next/font/google';

const firamono = Fira_Mono({
  weight: ["400", "700",],
  subsets: ["latin"],
})

// export const fetchData = async () => {
//     const res = await fetch('http://localhost:3000/api/items', {
//         cache: 'force-cache'
//     })
//     const data = await res.json();
//     return data
// }

const ProductsPage = async () => {
    // const datas = await fetchData() || [] 
    // or 
    // const datas = await dbConnect('items').find({}).toArray() || []
    // or 
    const datas = await getProducts()
    // console.log(datas)
    // if (datas.length > 5) {
    //     redirect('/')
    // }

    return (
        <div className='place-items-center mt-2 space-y-4'>
            {datas.map(data => {
                return (
                    <div className={`container mx-auto ${firamono.className}`} key={data._id} >
                        <p className='text-center'>{data.category}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsPage;