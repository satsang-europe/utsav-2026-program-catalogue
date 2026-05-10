import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "@/assets/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Program List",
  description: "Third Annual Utsav of Satsang Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        {children}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={true}
        />
      </body>
    </html>
  );
}
