'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname, pathname.includes('user-dashbord'))
    if (pathname.includes('user-dashbord') || pathname.includes('admin-dashbord')) {
        return <></>
    } else {
        return (
            <div className='flex justify-center'>
                <ul className='flex justify-between  container mx-auto px-10'>
                    <li><Link href='/'>Home</Link> </li>
                    <li><Link href='/about'>About </Link></li>
                    <li><Link href='/product'>Product</Link> </li>
                    <li><Link href='/contact'>Contact Us</Link></li>
                    <li><Link href='/posts'>Post</Link></li>
                </ul>
            </div>
        );
    }

};

export default Navbar;