import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/globals.css";
import Progressbar from "@/providers/Progressbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Homespace AI",
  description:
    "Homespace AI revolutionizes interior design, seamlessly melding style and functionality to craft personalized, visually stunning environments with just a click.",
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
