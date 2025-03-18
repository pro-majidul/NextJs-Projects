'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Aboutpage = () => {
    const route = useRouter() //conditionally kono kicu navigate korte caile amra etake use korte pari evabe 

    const isuser = false    ;
    const handelNavigate = () => {
        if (isuser) {
            route.push('/about/address')
        } else {
            route.push('/')
        }
    }
    return (
        <div>
            <h3>About us page</h3>
            {/* <Link href='/about/address'>Address page</Link> //basicallty direct navigate korte caile eta use korbo  */}

            <button type='button' onClick={handelNavigate}>address page</button>
        </div>
    );
};

export default Aboutpage;