import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
    title: "Shuvam Yadav",
    description: "Shuvam Yadav Personal Portfolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
