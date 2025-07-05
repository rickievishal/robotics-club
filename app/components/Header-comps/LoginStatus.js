"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LoginStatus = () => {
    const [cookie,setCookie] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const updateCookie = () => {
                const user = JSON.parse(localStorage.getItem("user-info"));
                setCookie(user);
        };

        updateCookie(); // Run once on mount

        window.addEventListener("login-success", updateCookie); // 🔁 Manual event
        window.addEventListener("storage", updateCookie);       // For other tabs

        return () => {
            window.removeEventListener("login-success", updateCookie);
            window.removeEventListener("storage", updateCookie);
        };
    }, []);


    const handleLogin = () => {
        localStorage.removeItem("user-info")
        console.log(cookie)
        router.push('/register')
    }
    const handleLogout = () =>{
        localStorage.removeItem("user-info")
        setCookie(null);
        console.log(cookie)
        window.location.reload()
    }
    console.log(cookie)
  return (
    <>
    {
        cookie ? (<>
        <button className='px-4 py-1 text-[var(--primary)] rounded-lg border-[1px] border-[var(--primary)]/20 hover:bg-gray-950 hover:cursor-pointer' onClick={handleLogout}>Logout</button>
        </>) : (<>
        <button className='px-4 py-1 rounded-lg border-[1px] border-[rgba(159,159,159,0.38)] hover:bg-gray-900 hover:cursor-pointer' onClick={handleLogin}>Login</button>
        </>)
    }
    </>
  )
}

export default LoginStatus