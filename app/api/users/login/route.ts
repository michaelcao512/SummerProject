import { NextRequest } from "next/server";
import bcyrpt from "bcryptjs";
import prisma from "@/lib/prisma";

type Body = {
    username: string;
    password: string;
}

export async function GET(request: NextRequest) {
    const body: Body = await request.json();
    const { username, password } = body;
    const user = await prisma.user.findFirst({
        where: {
            username: username
        },
        select: {
            id: true,
            password: true
        }
    });

    if (!user) {
        return { status: 404, body: { error: "User not found" } };
    }

    const result = await bcyrpt.compare(password, user.password);
    if (result) {
        // user authenticated, generate JWT


        return { status: 200, body: { message: "Login successful" } };
    } else {
        return { status: 401, body: { error: "Invalid password" } };
    }

    
}