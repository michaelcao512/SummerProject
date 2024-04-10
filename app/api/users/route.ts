
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// get all users
export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

// create user from request body
export async function POST(request: NextRequest) {
    try {
        const body: createUserRequest = await request.json();
        const { username, email, password } = body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password
            }
        });
        return NextResponse.json({ message: "user created", user });
    } catch (error: any) {
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return NextResponse.json({ error: 'Email already exists', errorMessage: error}, { status: 400 });
        } else {
            // Handle other errors
            return NextResponse.json({ error: 'Failed to create user', errorMessage: error }, { status: 500 });
        }
    }
}

// delete all users
export async function DELETE() {
    const users = await prisma.user.deleteMany({});
    return NextResponse.json({ message: "all users deleted", users });
}

