import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about", "/blog", "/contact", "/gallery", "/prices", "/auth/signin", "/auth/signup", "/api/stripe/payment", "/api/stripe/getProducts"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
