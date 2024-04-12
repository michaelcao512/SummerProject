import LoginForm from "../../components/forms/LoginForm"
import "./login.css"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
  
export default async function LoginPage() {
    const session = await getServerSession();
    // if the user is already logged in, redirect to the home page
    if (session) {
        redirect('/');
    }

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


