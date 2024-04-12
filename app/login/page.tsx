'use client'
import LoginForm from "../../components/forms/LoginForm"
import "./login.css"
  
export default function LoginPage() {
    return (
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader"> Log in</div>
                <div className = "LoginBody">
                     <LoginForm/>
                </div>
            </div>
        </div>
    )
}


