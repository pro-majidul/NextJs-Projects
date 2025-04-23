"use client"
import React from 'react';
import { signIn, signOut, useSession, } from "next-auth/react"


const LoginButton = () => {
    const { data : session} = useSession()
    if (session) {
        return (
            <>
                <button className='cursor-pointer' onClick={() => signOut()}>Sign out</button>
            </>
        )
    } else {
        return (
            <>
                <button className='cursor-pointer' onClick={() => signIn()}>Sign in</button>
            </>
        );
    }

};

export default LoginButton;