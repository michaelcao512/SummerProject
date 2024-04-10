import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const user: User | null = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    return NextResponse.json(user);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const body: createUserRequest = await request.json();
    const user: User = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    });
    return NextResponse.json(user);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const user: User = await prisma.user.delete({ where: { id: parseInt(id) } });
    return NextResponse.json(user);
}
