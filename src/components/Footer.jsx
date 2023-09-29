import Link from "next/link";

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
                            {data.map((item, i) => {
                                return (
                                    <Link
                                        className="px-3 py2 rounded-full bg-green-500 hover:bg-orange-600"
                                        key={i}
                                        href={item["link"]}
                                    >
                                        {item["name"]}
                                    </Link>
                                );
                            })}
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
                <p className=" py-5 italic">Copyright Design Agency 2023</p>
            </div>
        </footer>
    );
}
