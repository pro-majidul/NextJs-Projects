import React from 'react';

export const PostedJobs = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const Jobpost = async () => {
    const posts = await PostedJobs()
    return (
        <div className='space-y-5'>
            <h1> hello posted jobs</h1>
            {
                posts.map((singlepost) => {
                    return (
                        <div key={singlepost.id} >
                            <p>Title : {singlepost.title}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Jobpost;