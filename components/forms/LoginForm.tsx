import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation";
import Link from "next/link";

function LoginForm() {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        if (loggedIn) {
            redirect('/');
        }
    }, [loggedIn]);


    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('logging in')        
        const signInData = await signIn('credentials', {
            email: details.email,
            password: details.password,
            redirect: false
        });

        console.log(signInData);
        if (signInData?.error) {
            setError("Invalid email or password")
        } else {
            console.log('logged in')
            setLoggedIn(true);
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
                    <Link href="/register">
                        Don't have an account? Sign up
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm