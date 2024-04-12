import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link";
import { redirect } from "next/navigation";

import { useFormState } from "react-dom";
import { z } from "zod";

type FormState = {
    formData: {
        username: string;
        email: string;
        password: string;
    }
    buttonDisabled: boolean;
    usernameError?: string;
    emailError?: string;
    passwordError?: string;
};
const initialState: FormState = {
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

// validation schema
const schema = z.object({
    username: z.string()
        .min(1, { message: "This field is required" })
        .min(3, { message: "Too short. Must be greater 3 characters " })
        .max(15, { message: "Too long. Must be less than 15 characters" }),
    email: z.string()
        .min(1, { message: "This field is required" })
        .email(),
    password: z.string()
        .min(1, { message: "This field is required" })
        .min(6, { message: "Password is too short. Must be greater 6 characters" })
        .max(50, { message: "Password is too long. Must be less 50 characters" })
});

async function validateData(formState: FormState) {
    const username = formState.formData.username;
    const email = formState.formData.email;
    const password = formState.formData.password;

    const result = schema.safeParse({
        username: username,
        email: email,
        password: password
    });

    if (!result.success) {
        const fieldError = result.error.flatten().fieldErrors;
        let err = {
            buttonDisabled: false,
            usernameError: '',
            emailError: '',
            passwordError: '',
        };
        for (const [field, error] of Object.entries(fieldError)) {
            err = {
                ...err,
                buttonDisabled: true,
                [`${field}Error`]: error[0]
            }
        }
        return err;
    }
    return {};

}


async function validateFormAction(prevState: FormState, formData: FormData) {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    let formState = {
        ...prevState,
        formData: {
            username: username ,
            email: email,
            password: password,
        },
    };
    
    const errors = await validateData(formState);
    if (Object.keys(errors).length > 0) {
        return {
            ...prevState,
            ...errors
        };
    }
    const newState = {
        ...formState,
        buttonDisabled: false,
        usernameError: '',
        emailError: '',
        passwordError: '',
    }
    return newState;
}
    
type interactedFields = {
    username: boolean;
    email: boolean;
    password: boolean;
};

function RegisterForm() {
    const [userRegistered, setUserRegistered] = useState(false);
    const [formState, formAction] = useFormState(validateFormAction, initialState);
    const [error, setError] = useState(''); 
    const [interactedFields, setInteractedFields] = useState({
        username: false,
        email: false,
        password: false,
    });

    // input handling for form validation
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;
        setInteractedFields({ ...interactedFields, [name]: true });

        const FD = new FormData(event.target.form as HTMLFormElement);
        formAction(FD);
    }

    // after user registered redirect to login page
    useEffect(() => {
        if (userRegistered) {
            redirect('/login');
        }
    }, [userRegistered]);

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
                    <Link href="/login"> Already have an account? Log in </Link>
                    <Button type="submit" disabled={formState.buttonDisabled}>Register</Button>
                </div>
            </div>
        </form>
    );

}

export default RegisterForm