import { getServerSession } from "next-auth";
import SignOut from "@/components/functions/signout";


export default async function About() {
    const session = await getServerSession();
    if (!session) {
        return (<p>NOT AUTHORIZED</p>)
    }
    return (
        <div>
            <h1>About</h1>
            <p>Authorized</p>
            <span>{session.user?.email}</span> 
            <SignOut />
        </div>
    )
}
    

