import { getServerSession } from "next-auth";
import {NextRequest, NextResponse} from "next/server";
import {redirect} from "next/navigation";
import {getToken} from "next-auth/jwt";
// export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {

    const token = await getToken({req});
    if (!token) {
        return NextResponse.redirect(new URL('/about', req.url).toString());
    }

    return NextResponse.next();
}
export const config = {
    matcher: [
        // don't run middleware for these paths
        // api, static files, auth, favicon, robots, images, register, login, about
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|images|login|register|about|$).*)',

    ]
}