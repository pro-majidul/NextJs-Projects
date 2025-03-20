
import React from 'react';

export const singlePostData = async (singleid) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${singleid}`)
    const data = await res.json()
    return data
}

const SingleData = async ({ params }) => {
    const id =  params.id;
    const getdata = await singlePostData(id)
    return (
        <div>
            <p className='text-3xl font-bold'>{getdata.title}</p>
            <p className='text-xl font-medium'>{getdata.body}</p>
        </div>
    );
};

export default SingleData;