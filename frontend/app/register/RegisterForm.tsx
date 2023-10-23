import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"

function RegisterForm({ Login, error }: {Login: any, error: any}) {
    const[details, setDetails] = useState({username: "", email: "", password: ""});

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className = "form-group">
                    <label htmlFor="username">Username:
                    <Input type="username" id="username" name="username" onChange={e => setDetails({...details, username: e.target.value})} value ={details.username} />
                    </label>
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email:
                    <Input type="email" id="email" name="email" onChange={e => setDetails({...details, email: e.target.value})} value ={details.email} />
                    </label>
                </div>
                <div className = "form-group">
                        <label htmlFor="Password">Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                        </label>
                        {/* <button>Don't have an account? Register here.</button> */}
                </div>
                <div className="LoginBody">
                    <a  href="./app">
                    <Button>Sign Up</Button>
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