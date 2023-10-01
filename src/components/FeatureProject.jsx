import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import FeatureImg1 from "public/Feature-images/feature1.png";
import FeatureImg2 from "public/Feature-images/feature2.png";
import FeatureImg3 from "public/Feature-images/feature3.png";
import FeatureImg4 from "public/Feature-images/feature4.png";
import FeatureImg5 from "public/Feature-images/feature5.png";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
    if (!res.ok) {
        throw new Error("Featured Data Calling Fail");
    }
    return res.json();
}

export default async function FeatureProject() {
    const data = await getData();
    return (
        <section className=" py-20">
            <div className=" container mx-auto px-6 md:px-0 lg:px-0">
                <SectionHeader
                    sectionHeader={{
                        title: "Featured Project",
                        desc: "We provide the Perfect Solution to your business growth",
                    }}
                />
                <div className=" grid grid-rows-2 grid-cols-4 g pt-10 gap-8">
                    <div className="row-span-1 md:lg:row-span-2 col-span-4 md:lg:col-span-2">
                        <div className=" w-full h-full">
                            <div className=" w-full h-[300px] md:lg:h-[505px] overflow-hidden rounded-lg">
                                <img
                                    className=" h-full w-full object-cover hover:scale-105 transition duration-300"
                                    src={data[0]["image"]}
                                    alt="images"
                                />
                            </div>
                            <p className=" text-slate-700 text-sm pt-4">
                                {data[0]["remark"]}
                            </p>
                            <Link
                                className=" text-indigo-950 text-2xl font-bold"
                                href={data[0]["live"]}
                                target=" _blank"
                            >
                                {data[0]["title"]}
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4 md:lg:col-span-1">
                        <div className=" w-full h-[300px] md:lg:h-[190px] overflow-hidden rounded-lg">
                            <img
                                className="h-full w-full object-cover hover:scale-105 transition duration-300"
                                src={data[1]["image"]}
                                alt="Images"
                            />
                        </div>
                        <p className=" text-slate-700 text-sm pt-4">
                            {data[1]["remark"]}
                        </p>
                        <Link
                            className=" text-indigo-950 text-xl font-bold"
                            href={data[1]["live"]}
                            target=" _blank"
                        >
                            {data[1]["title"]}
                        </Link>
                    </div>
                    <div className="col-span-4 md:lg:col-span-1">
                        <div className=" w-full h-[300px] md:lg:h-[190px] overflow-hidden rounded-lg">
                            <img
                                className="h-full w-full object-cover hover:scale-105 transition duration-300"
                                src={data[2]["image"]}
                                alt="Images"
                            />
                        </div>
                        <p className=" text-slate-700 text-sm pt-4">
                            {data[2]["remark"]}
                        </p>
                        <Link
                            className=" text-indigo-950 text-xl font-bold"
                            href={data[2]["live"]}
                            target=" _blank"
                        >
                            {data[2]["title"]}
                        </Link>
                    </div>
                    <div className="col-span-4 md:lg:col-span-1">
                        <div className=" w-full h-[300px] md:lg:h-[190px] overflow-hidden rounded-lg">
                            <img
                                className="h-full w-full object-cover hover:scale-105 transition duration-300"
                                src={data[3]["image"]}
                                alt="Images"
                            />
                        </div>
                        <p className=" text-slate-700 text-sm pt-4">
                            {data[3]["remark"]}
                        </p>
                        <Link
                            className=" text-indigo-950 text-xl font-bold"
                            href={data[3]["live"]}
                            target=" _blank"
                        >
                            {data[3]["title"]}
                        </Link>
                    </div>
                    <div className="col-span-4 md:lg:col-span-1">
                        <div className=" w-full h-[300px] md:lg:h-[190px] overflow-hidden rounded-lg">
                            <img
                                className="h-full w-full object-cover hover:scale-105 transition duration-300"
                                src={data[4]["image"]}
                                alt="Images"
                            />
                        </div>
                        <p className=" text-slate-700 text-sm pt-4">
                            {data[4]["remark"]}
                        </p>
                        <Link
                            className=" text-indigo-950 text-xl font-bold"
                            href={data[4]["live"]}
                            target=" _blank"
                        >
                            {data[4]["title"]}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
