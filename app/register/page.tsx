'use client'
import Link from "next/link"
import RegisterForm from "../../components/forms/RegisterForm"
import "./register.css"

export default function RegisterPage() {
    return (
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader"> Sign Up</div>
                <div className="LoginBody">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )

}


