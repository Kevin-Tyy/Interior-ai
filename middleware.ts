import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about", "/blog", "/contact", "/gallery", "/prices", "/auth(.*)", "/api/stripe(.*)", "/api/webhooks(.*)", "/api/test"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
