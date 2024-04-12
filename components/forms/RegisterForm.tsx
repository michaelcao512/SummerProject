"use client"
import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link";
import { redirect } from "next/navigation";

import { useFormState } from "react-dom";
import { validateFormAction } from "@/lib/validation";

const initialState: RegisterFormState = {
    formData: {
        username: '',
        email: '',
        password: ''
    },
    buttonDisabled: true,
    usernameError: '',
    emailError: '',
    passwordError: '',
};

function RegisterForm() {
    const [formState, formAction] = useFormState(validateFormAction, initialState);
    const [error, setError] = useState(''); 

    // interacted fields for displaying error messages
    const [interactedFields, setInteractedFields] = useState({
        username: false,
        email: false,
        password: false,
    });

    // after user registered redirect to login page
    const [userRegistered, setUserRegistered] = useState(false);
    useEffect(() => {
        if (userRegistered) {
            redirect('/login');
        }
    }, [userRegistered]);

    // input handling for form validation
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;
        setInteractedFields({ ...interactedFields, [name]: true });

        const FD = new FormData(event.target.form as HTMLFormElement);
        formAction(FD);
    }

    // submit form
    async function handleSubmit() {
        const { username, email, password } = formState.formData;
        const body = JSON.stringify({ username, email, password });

        const usernameFetch = await fetch(`api/users/register/checkAvaliable/username/${username}`);
        const emailFetch = await fetch(`api/users/register/checkAvaliable/email/${email}`);

        console.log(usernameFetch);
        const usernameData= await usernameFetch.json();
        const emailData = await emailFetch.json();

        if (!usernameData || !emailData) {
            return;
        }
        const usernameAvaliable = usernameData.avaliable;
        const emailAvaliable = emailData.avaliable;

        if (!usernameAvaliable && !emailAvaliable) {
            setError("Username and email already exists");
            return;
        } else if (!usernameAvaliable) {
            setError("Username already exists");
            return;
        } else if (!emailAvaliable) {
            setError("Email already exists");
            return;
        }


        const user = await fetch('api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        });
        if (user.status === 200) {
            setUserRegistered(true);
        } 
        else {
            setError("Unable to register user");
        }
    }

    return (
        <form action={formAction} onSubmit={handleSubmit}>
            <span className="text-red-500 uppercase">  {error}</span>
            <div className="form-inner">
                <div className="form-group">
                    <label>Username</label>
                    {interactedFields.username && <span className="text-red-500">  {formState.usernameError}</span>}
                    <Input type="text" name="username" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    {interactedFields.email && <span className="text-red-500">  {formState.emailError}</span>}
                    <Input type="email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    {interactedFields.password && <span className="text-red-500">  {formState.passwordError}</span>}
                    <Input type="password" name="password" onChange={handleChange} />
                </div>
                <div className="LoginBody"> 
                    <Button type="submit" disabled={formState.buttonDisabled}>Register</Button>
                    <Link href="/login">Already have an account? Log in </Link>
                </div>
            </div>
        </form>
    );

}

export default RegisterForm