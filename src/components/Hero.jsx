import Image from "next/image";
import Link from "next/link";
import { BrandList } from "./BrandList";
import HeroImage1 from "public/hero-images/Hero-image-1.png";
import HeroImage2 from "public/hero-images/Hero-image-2.png";
import HeroImage3 from "public/hero-images/Hero-image-3.png";
import HeroImage4 from "public/hero-images/Hero-image-4.png";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res.ok) {
        throw new Error("Hero Data calling Fail");
    }
    return res.json();
}
export default async function HeroBanner() {
    const data = await getData();
    return (
        <section className=" bg-green-100 pt-20 pb-14">
            <div className="container mx-auto grid grid-cols-12 justify-between py-10 xl:py-24 px-6 md:px-0 lg:px-0">
                <div className=" col-span-12 md:lg:col-span-5 pt-10">
                    <h1 className=" text-5xl font-bold py-5">
                        {data["title"]}
                    </h1>
                    <p className=" text-xl font-medium py-4">
                        {data["description"]}
                    </p>
                    <div className=" pt-10 md:lg:pt-16">
                        <Link
                            className=" px-7 py-4 transition-all duration-300 text-lg font-bold bg-green-500 border-2 border-green-500 hover:bg-transparent rounded-xl text-white hover:text-black"
                            href="#"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className=" col-span-12 md:lg:col-span-1 py-10"></div>
                <div className=" col-span-12 md:lg:col-span-6 flex flex-col gap-6">
                    <div className="grid grid-cols-12 gap-6 h-[150px] md:lg:h-[275px]">
                        <div className=" col-span-8 rounded-lg overflow-hidden w-full h-full">
                            <Image
                                src={HeroImage1}
                                alt="Image1"
                                width={600}
                                height={500}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                }}
                            />
                        </div>
                        <div className=" col-span-4 rounded-lg overflow-hidden w-full h-full">
                            <Image
                                src={HeroImage2}
                                alt="Image2"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 h-40">
                        <div className=" col-span-4 rounded-lg overflow-hidden">
                            <Image
                                src={HeroImage3}
                                alt="Image3"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className=" col-span-8 rounded-lg overflow-hidden h-full w-full">
                            <Image
                                src={HeroImage4}
                                alt="Image4"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <BrandList />
        </section>
    );
}
