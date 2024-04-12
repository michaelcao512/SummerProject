"use client"
import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const signInData = await signIn('credentials', {
            email: details.email,
            password: details.password,
            redirect: false
        });

        if (signInData?.error) {
            setError("Invalid email or password");
        } else {
            router.push('/');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="form-inner">
                <span className="text-red-500 uppercase">  {error}</span>

                <div className="form-group">
                    <label htmlFor="username">Email:
                        <Input type="username" id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </label>
                </div>
                <div className="LoginBody">
                    <Button type="submit">Login</Button>
                    <Link href="/register">Don&apos;t have an account? Sign up </Link>
                </div>
            </div>
        </form>
    )
}
