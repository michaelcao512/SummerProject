'use client'

import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import RegisterForm from "./RegisterForm"
import "./register.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactDom from "react-dom"
import { Progress } from "@/components/ui/progress"
// import { useSession } from "next-auth/client"
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { useRouter } from "next/navigation"


export default function RegisterPage() {
    const router = useRouter();

    const [details, setDetails] = useState({ username: '', email: '', password: '' });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // if loading, user registered succesfully and redirect to home    
    useEffect(() => {
        if (loading) {
            // redirect to localhost:3000/
            // TODO: redirects to user's profile
            // TODO: authenticate user
            router.replace('/');
        }
    }), [loading];

    // if fields have input enable button
    useEffect(() => {
        const { username, password, email } = details;
        if (username != '' && password != '' && email != '') {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [details]);


    async function Register() {
        const user = await fetch('api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });
        const data = await user.json();

        if (data.error) {
            setErrorMessage(data.error);
        } else {
            // succesful register
            setErrorMessage('');
            setLoading(true);
            console.log(data);
        }

    }

    return (
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader"> Sign Up</div>
                <div className="LoginBody">
                    <RegisterForm Register={Register} details={details} setDetails={setDetails} buttonDisabled={buttonDisabled} errorMessage={errorMessage} />
                </div>
            </div>
        </div>
    )

}


