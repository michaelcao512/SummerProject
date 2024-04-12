import Image from 'next/image'
import Link from 'next/link'

import { getServerSession } from "next-auth";
import SignOut from "@/components/functions/signout";
import { redirect } from "next/navigation";


export default async function Home() {
    const session = await getServerSession();
    if (!session) {
        redirect('/about');
    }

    return (
    <>
      <p>Home</p>
        <p>Welcome {session.user?.name}</p>
      <SignOut />
    </>
  )
}
    