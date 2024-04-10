import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
type Props = {
    Register: () => void;
    details: { username: string, password: string, email: string };
    setDetails: (details: { username: string, password: string, email: string }) => void;
    buttonDisabled: boolean;
    errorMessage: string;
}

function RegisterForm({ Register, details, setDetails, buttonDisabled, errorMessage}: Props) {

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        Register();
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="username">Username:
                        <Input type="username" id="username" name="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:
                        <Input type="email" id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </label>
                </div>
                <div className="LoginBody">

{/* TODO: error message need some styling  */}
                    {errorMessage && <p>{errorMessage}</p>}
                    
                    
                    <a href="./app">
                        <Button type="submit" disabled={buttonDisabled}>Register</Button>
                    </a>
                    <a href="./login">
                        <p>Already have an account? Log in</p>
                    </a>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm