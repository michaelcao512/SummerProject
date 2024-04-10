
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type createUserRequest = {
    name: string;
    email: string;
    password: string;
}

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const body: createUserRequest = await request.json();
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    });
    return NextResponse.json(user);
}

export async function DELETE() {
    const users = await prisma.user.deleteMany();
    return NextResponse.json(users);
}

