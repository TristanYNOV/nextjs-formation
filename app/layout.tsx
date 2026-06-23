import Footer from "@/composants/layout/Footer";
import Header from "@/composants/layout/Header";
import {Inter} from "next/font/google";
import ScrollTop from "@/composants/layout/ScrollTop";
import "@/styles/globals.css";

const inter = Inter({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={inter.className}>
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            />
            <title>MY APP ROUTER APP</title>
        </head>

        <body className="bg-light">
        <Header/>
        <main>{children}</main>
        <ScrollTop/>
        <Footer/>
        </body>
        </html>
    )
}