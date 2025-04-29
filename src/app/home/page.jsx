// "use client"
"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

// import { useSession } from 'next-auth/react';

const Home = async () => {
    // const session = useSession()
    const session = await getServerSession(authOptions)
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    );
};

export default Home;