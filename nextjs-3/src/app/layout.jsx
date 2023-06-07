import "./globals.css";
import { Inter } from "next/font/google";
import { TasksProvider } from "@/context/TasksContext";
const inter = Inter({ subsets: ["latin"] });
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/Toaster";
import { Layout } from "@/components/Layout";

export const metadata = {
    title: "TaskApp",
    description: "Tasks to do app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </head>
            <body className={inter.className}>
                <TasksProvider>
                    <Navbar />
                    <Layout>{children}</Layout>
                    <Toaster />
                </TasksProvider>
            </body>
        </html>
    );
}
