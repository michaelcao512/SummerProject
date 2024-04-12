import RegisterForm from "../../components/forms/RegisterForm"
import "./register.css"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function RegisterPage() {
    const session = await getServerSession();
    // if the user is already logged in, redirect to the home page
    if (session) {
        redirect('/');

    }

    return (
        <div className="Login">
            <div className="LoginBox">
                <div className="LoginHeader"> Sign Up</div>
                <div className="LoginBody">
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )

}


