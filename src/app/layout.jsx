import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
    title: "Design-Agency",
    description: "Module-16 project by OSTAD ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.style}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
