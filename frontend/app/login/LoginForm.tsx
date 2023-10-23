import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"

function LoginForm({ Login, error }: {Login: any, error: any}) {
    const[details, setDetails] = useState({username: "", password: ""});

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
                        <label htmlFor="Password">Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                        </label>
                        {/* <button>Don't have an account? Register here.</button> */}
                </div>
                <div className="LoginBody">
                    <a  href="./app">
                    <Button >Login</Button>
                    </a>
                    <a href="./register">
                    <p> Don't have an account? Sign up</p>
                    </a>
                </div>
            </div>
        </form>
   )
}

export default LoginForm