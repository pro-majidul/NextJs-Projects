"use client";

import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const MealSearchInput = () => {
    // const [allmeals, setALlmeals] = useState([])
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname();

    useEffect(() => {
        const searchquery = { search } // amra kidiye  search korbo se setake ekta object er vitor rekhe dilam 
        const urlquerySearch = new URLSearchParams(searchquery) // eta javascript er query parameter niye kaj kore , query te ki dibo eta niye kaj kore 

        const url = `${pathname}?${urlquerySearch}` // ekhane total url ta create korlam , url er pathname e age jeta path name chilo setai thakbe + er sathe query akare  amra jeta likhe search korbo seta automatic url e set hobe 

        router.push(url) // ekhn amra jei url ta banailam seta router er ulr e set kore dilam and ekhn kaj korbe 

    }, [search])
    return (

        <div>
            <input type="text"

                placeholder="Search for a meal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-black w-full border p-2 rounded bg-white" />
        </div>

    );
};

export default MealSearchInput;