import Link from "next/link";

export default async function HeroBanner() {
    return (
        <section className=" bg-green-100 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10 xl:py-40">
                <div>
                    <h1 className=" text-5xl font-bold py-5">
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <p className=" text-xl font-medium">
                        We help businesses like yours earn more customers,
                        standout from competitors, make more money
                    </p>
                    <div className="pt-16">
                        <Link
                            className=" px-7 py-4 bg-green-500 border-2 border-green-500 hover:bg-transparent rounded-xl text-white hover:text-black"
                            href="#"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
