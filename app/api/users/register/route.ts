import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcyrpt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        const body: createUserRequest = await request.json();
        const { username, email, password } = body;
        const hashedPassword = await bcyrpt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: "user created", user });
    } catch (error: any) {
        console.error('Failed to create user', error)
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return NextResponse.json({ error: 'Email already exists', errorMessage: error }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Failed to create user', errorMessage: error }, { status: 500 });
        }
    }
}
