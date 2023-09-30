import Link from "next/link";
import FacebookIcon from "public/social/facebook.svg";
import TwiterIcon from "public/social/twiter.svg";
import LinkedinIcon from "public/social/linkedin.svg";
import InastragramIcon from "public/social/instragram.svg";
import Image from "next/image";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/SocialLink");
    if (!res.ok) {
        throw new Error("Social Media Data Calling Fail");
    }
    return res.json();
}
export default async function Footer() {
    const data = await getData();
    return (
        <footer className=" bg-black text-white py-8">
            <div className=" container mx-auto px-6 md:px-0 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-32 lg:gap-32">
                    <div className=" flex flex-col justify-center">
                        <h3 className=" text-xl font-bold py-3 md:py-4 lg:py-4 uppercase">
                            Web Logo
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Aut, magni?
                        </p>
                        <div className="flex gap-4 py-5">
                            <Link
                                className=" w-10 h-10 inset-0  flex items-center justify-center rounded-full bg-green-500 hover:bg-orange-600"
                                href={data[0]["link"]}
                                target="_blank"
                            >
                                <Image
                                    src={FacebookIcon}
                                    width={12}
                                    height={12}
                                    alt={data[0]["name"]}
                                />
                            </Link>
                            <Link
                                className=" w-10 h-10 inset-0  flex items-center justify-center rounded-full bg-green-500 hover:bg-orange-600"
                                href={data[1]["link"]}
                                target="_blank"
                            >
                                <Image
                                    src={TwiterIcon}
                                    width={18}
                                    height={18}
                                    alt={data[1]["name"]}
                                />
                            </Link>
                            <Link
                                className=" w-10 h-10 inset-0  flex items-center justify-center rounded-full bg-green-500 hover:bg-orange-600"
                                href={data[2]["link"]}
                                target="_blank"
                            >
                                <Image
                                    src={LinkedinIcon}
                                    width={16}
                                    height={16}
                                    alt={data[2]["name"]}
                                />
                            </Link>
                            <Link
                                className=" w-10 h-10 inset-0  flex items-center justify-center rounded-full bg-green-500 hover:bg-orange-600"
                                href={data[0]["link"]}
                                target="_blank"
                            >
                                <Image
                                    src={InastragramIcon}
                                    width={16}
                                    height={16}
                                    alt={data[0]["name"]}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className=" w-full lg:md:w-1/2 mx-auto">
                        <div>
                            <h3 className=" font-bold py-4">Quick Links</h3>
                            <div className="flex flex-col gap-2">
                                <Link
                                    className=" hover:underline hover:text-green-500 "
                                    href="/team"
                                >
                                    Team
                                </Link>
                                <Link
                                    className=" hover:underline hover:text-green-500 "
                                    href="/services"
                                >
                                    Services
                                </Link>
                                <Link
                                    className=" hover:underline hover:text-green-500 "
                                    href="/projects"
                                >
                                    Projects
                                </Link>
                                <Link
                                    className=" hover:underline hover:text-green-500 "
                                    href="/testimonials"
                                >
                                    Testimonials
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <h3 className=" font-bold pt-4">Address</h3>
                        <p>Design Agency Head Office.</p>
                        <p>Airport Road</p>
                        <p>United Arab Emirate</p>
                    </div>
                </div>
                <p className=" py-8 italic">Copyright Design Agency 2023</p>
            </div>
        </footer>
    );
}
