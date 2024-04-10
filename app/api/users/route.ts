
import prisma from "@/lib/prisma";
import Error from "next/error";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    try {
        const body: createUserRequest = await request.json();
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        });
        return NextResponse.json(user);
    } catch (error: any) {
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return NextResponse.json({ error: 'Email already exists', errorMessage: error}, { status: 400 });
        } else {
            // Handle other errors
            return NextResponse.json({ error: 'Failed to create user', errorMessage: error }, { status: 500 });
        }
    }
}

export async function DELETE() {
    const users = await prisma.user.deleteMany({});
    return NextResponse.json(users);
}

