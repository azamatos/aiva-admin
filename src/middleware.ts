import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("token");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// // do not include the root '/' path in this list, it will not see cookies for unknown reasons
// export const config = {
//   matcher: [
    
//   ],
// };
