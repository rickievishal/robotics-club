"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AdminAuth = ({children}) => {
    const [isAdmin,setIsAdmin] = useState(false)
    const router = useRouter();
    useEffect(()=>{
        const cookie = localStorage.getItem("user-info")
        setIsAdmin(cookie?.role == "admin")
        if (!isAdmin){
            router.push("/")
        }
    },[])
    
  return isAdmin ? children : null
}

export default AdminAuth