import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <ul className='flex justify-between  container mx-auto px-10'>
                <li>Home </li>
                <li>About </li>
                <li>Product </li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default Navbar;