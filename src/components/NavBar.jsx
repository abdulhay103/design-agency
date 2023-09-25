import Link from "next/link";

export function NavBar() {
    return (
        <header className=" pt-4 fixed w-full">
            <div className=" container mx-auto flex justify-between items-center py-4">
                <div>
                    <Link href="/">
                        Design<span className=" text-orange-600">Agency</span>
                    </Link>
                </div>
                <div className=" flex gap-6">
                    <Link className=" px-3 py-2" href="/">
                        Home
                    </Link>
                    <Link className=" px-3 py-2" href="/team">
                        Team
                    </Link>
                    <Link className=" px-3 py-2" href="/services">
                        Services
                    </Link>
                    <Link className=" px-3 py-2" href="/projects">
                        Projects
                    </Link>
                    <Link className=" px-3 py-2" href="/testimonials">
                        Testimonials
                    </Link>
                    <Link
                        className=" px-4 py-2 border-2 border-green-500 hover:border-2 bg-transparent hover:bg-green-500 hover:text-white rounded-lg"
                        href="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className=" px-4 py-2 bg-green-500 text-white hover:bg-transparent hover:text-black hover:border-2 border-2 rounded-lg border-green-500 hover:border-green-500"
                        href="/register"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
}
