'use client'

// import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import LoginForm from "./LoginForm"
import Link from "next/link"
import "./login.css"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
// import { useSession } from "next-auth/client"

export default function LoginPage() {
    const[username, setUsername] = useState(''); 
    const[password, setPassword] = useState('');
    


    return (
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader"> Log in</div>
                <div className = "LoginBody">
            {(username != "") ? (
                <div>
                    <h2>Welcome, <span>{username}</span></h2>
                    <button>Logout</button>
                </div>
            ): (<LoginForm/>) }

                </div>
            </div>
        </div>
    )
}


