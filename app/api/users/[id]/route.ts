import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// get user by id
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const user: User | null = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    return NextResponse.json(user);
}

// update user by id from request body
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const body: createUserRequest = await request.json();
    const { username, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            username: username,
            email: email,
            password: hashedPassword
        }
    });
    return NextResponse.json({message: "user updated", user});
}

// delete user by id
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const user: User = await prisma.user.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ message: "user deleted", user });
}
