"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const JobPost = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className='my-5 py-10 container mx-auto'>

            <div className='grid grid-cols-3 gap-5'>
                {jobs.length > 0 ? (
                    jobs.map((singlepost) => (
                        <div key={singlepost.id} className='space-y-2 border p-3 rounded-xl'>
                            <p className='text-xl font-bold'>Title: {singlepost.title}</p>
                            <p className='text-xl font-normal'>body : {singlepost.body}</p>
                            <Link href={`/posts/${singlepost.id}`} className='underline'>Details</Link>
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobPost;
