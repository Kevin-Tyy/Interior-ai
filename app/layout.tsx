import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/globals.css";
import Progressbar from "@/providers/Progressbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Interior AI",
  description: "Interior AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>
          <Progressbar>{children}</Progressbar>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
