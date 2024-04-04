import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { User } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    // const user: User = await prisma.user.create(
    //     {
    //         email: 'test@gmail.com',
    //         name: 'test',
    //         password: 'test',
    //     }
    // );
    // return NextResponse.json(user);
}
