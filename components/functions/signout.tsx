"use client"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

export default function SignOut() {
    return (
        <div>
            <Button onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
            </Button>
        </div>

    )
}