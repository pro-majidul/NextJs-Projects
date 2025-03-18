import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div>
            <h3>Not Found Page</h3>
            <Link href='/'>Go back</Link>
        </div>
    );
};

export default NotFoundPage404;