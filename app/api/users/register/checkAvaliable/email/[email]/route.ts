import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: {params: {email: string}}) {
    const email = context.params.email;
    const usersWithEmail = await prisma.user.findMany({
        where: {
            email: email
        }
    });
    const emailAvaliable = usersWithEmail.length === 0;
    return NextResponse.json({
        avaliable: emailAvaliable,
        email: email
    });

}