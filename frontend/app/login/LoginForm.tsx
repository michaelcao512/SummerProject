import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function LoginForm() {
    const [details, setDetails] = useState({ username: "", password: "" });


    const handleLogin = async () => {
        try {
            const username = details.username;
            const password = details.password;

            const response = await fetch('http://127.0.0.1:3001/', {
                method: 'GET',   
            });
            const data = response.json();
            alert(data);

            if (response.ok) {
                alert('Login successful!');
                // Handle the token (e.g., store it in localStorage) for future requests
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <form onSubmit={handleLogin}>
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="username">Username:
                        <Input type="username" id="username" name="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </label>
                </div>
                <div className="LoginBody">
                    <a href="./app">
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