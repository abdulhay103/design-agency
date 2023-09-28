import Image from "next/image";
import Link from "next/link";
import { BrandList } from "./BrandList";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res.ok) {
        throw new Error("Hero Data calling Fail");
    }
    return res.json();
}
export default async function HeroBanner() {
    const data = await getData();
    console.log(data);
    return (
        <section className=" bg-green-100 pt-20 pb-14">
            <div className="container mx-auto grid grid-cols-12 justify-between py-10 xl:py-24">
                <div className=" col-span-5">
                    <h1 className=" text-5xl font-bold py-5">
                        {data["title"]}
                    </h1>
                    <p className=" text-xl font-medium">
                        {data["description"]}
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
                <div className=" col-span-1"></div>
                <div className=" col-span-6 flex flex-col gap-6">
                    <div className="grid grid-cols-12 gap-6 h-[200px]">
                        <div className=" col-span-8 overflow-hidden rounded-md">
                            <Image src={data["image2"]} alt="Image2" width={500} height={500} />
                        </div>
                        <div className=" col-span-4 rounded-md overflow-hidden">
                            <Image src={data["image1"]}  alt="Image1" width={500} height={500}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 h-40">
                        <div className=" col-span-4 rounded-md overflow-hidden">
                            <Image src={data["image4"]} alt="Image3" width={500} height={500}/>
                        </div>
                        <div className=" col-span-8 rounded-md overflow-hidden">
                            <Image src={data["image3"]} alt="Image4" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <BrandList/>
        </section>
    );
}
