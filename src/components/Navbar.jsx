'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import LoginButton from './LoginButton';
import { Fira_Mono } from 'next/font/google';

const firamono = Fira_Mono({
    weight: ["400", "700",],
    subsets: ["latin"],
})
const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname, pathname.includes('user-dashbord'))
    if (pathname.includes('user-dashbord') || pathname.includes('admin-dashbord')) {
        return <></>
    } else {
        return (
            <div className='flex justify-center py-3'>
                <ul className='flex justify-between  container mx-auto px-10'>
                    <li className={`${firamono.className}`}><Link href='/'>Home</Link> </li>
                    <li className={`${firamono.className}`}><Link href='/about'>About </Link></li>
                    <li className={`${firamono.className}`}><Link href='/product'>Product </Link></li>
                    <li className={`${firamono.className}`}><Link href='/product/add'>Add Product </Link></li>
                    <li className={`${firamono.className}`}><Link href='/meals'>Meals</Link> </li>
                    <li className={`${firamono.className}`}><Link href='/posts'>Post</Link></li>
                    <li className={`${firamono.className}`}><Link href='/contact'>Contact Us</Link></li>
                    <li className={`${firamono.className}`}><LoginButton></LoginButton></li>
                </ul>
            </div>
        );
    }

};

export default Navbar;