import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: {params: {username: string}}){
    const username = context.params.username;
    const usersWithUsername = await prisma.user.findMany({
        where: {
            username: username
        }
    });
    const usernameAvaliable = usersWithUsername.length === 0;
    return NextResponse.json({
        avaliable: usernameAvaliable,
        username: username
    });

}