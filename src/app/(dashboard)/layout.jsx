import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <section>
            <div className='grid grid-cols-12 container mx-auto px-10'>
                {/* left side navbar  */}
                <div className='col-span-3'>
                    <ul>
                        <li>User Info </li>
                        <li>User Email </li>
                        <li>User Name</li>
                    </ul>
                </div>
                {/* right side dashboard content */}
                <div className='col-span-9'>{children}</div>
            </div>

        </section>
    );
};

export default DashboardLayout;