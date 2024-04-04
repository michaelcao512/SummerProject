import { NextResponse } from "next/server"

type Params = {
    id: string
}

export async function GET(request: Request, context: { params: Params }) {
    const id = context.params.id;
    return NextResponse.json(`Hello from the API with id ${id}!`, { status: 200 });
    
}