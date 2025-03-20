"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const AllMealsData = () => {
    const [allmeals, setALlmeals] = useState([])
    const [search, setSearch] = useState('')

    const mealsdata = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setALlmeals(data.meals || [])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        mealsdata()
    }, [search])
    return (
        <section className='space-y-5'>
            <div className='flex items-center justify-center w-1/2 mx-auto'>
                <input type="text"

                    placeholder="Search for a meal..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-black w-full border p-2 rounded bg-white" />
            </div>
            <div className='grid grid-cols-4 gap-4 '>
                {
                    allmeals?.map(singlemeal => {
                        return (
                            <div className='border' key={singlemeal.idMeal}>
                                <p className='text-2xl'>{singlemeal.strCategory}</p>
                                <p className='text-xl'>{singlemeal.strCategory}</p>
                                <p className='text-lg'>{singlemeal.strInstructions}</p>

                                <Image
                                    src={singlemeal?.strMealThumb}
                                    width={500}
                                    height={500}
                                    alt="Meal Image"
                                    unoptimized={true}
                                />

                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

export default AllMealsData;