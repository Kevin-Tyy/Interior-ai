import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/globals.css";
import Progressbar from "@/providers/Progressbar";

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
    <html lang="en">
      <body>
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
