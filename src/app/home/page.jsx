"use client"
import { useSession } from 'next-auth/react';

const Home = () => {
    const session = useSession()
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    );
};

export default Home;