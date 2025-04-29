
import React from 'react';

export const singlePostData = async (singleid) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${singleid}`)
    const data = await res.json()
    return data
}


export async function generateMetadata({ params }) {
    
    const { id } = await params
   
    // fetch data
    const getdata = await singlePostData(id)
   
   
    return {
      title: getdata.title,
     description : getdata.body
    }
  }

const SingleData = async ({ params }) => {
    const { id } = await params
    const getdata = await singlePostData(id)
    return (
        <div className='container mx-auto'>
            <p className='text-3xl font-bold'>{getdata.title}</p>
            <p className='text-xl font-medium'>{getdata.body}</p>
        </div>
    );
};

export default SingleData;