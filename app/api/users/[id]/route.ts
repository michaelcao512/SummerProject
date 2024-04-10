import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    return NextResponse.json(user);
}