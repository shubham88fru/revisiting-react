import { auth } from "./app/_lib/auth";

// export async function middleware(request) {

// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
