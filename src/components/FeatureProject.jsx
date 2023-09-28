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
    console.log(data[2]["title"]);
    return (
        <section className=" py-20">
            <div className=" container mx-auto">
                <SectionHeader
                    sectionHeader={{
                        title: "Featured Project",
                        desc: "We provide the Perfect Solution to your business growth",
                    }}
                />
                <div className=" grid grid-cols-12 pt-10 gap-5">
                    <div className=" col-span-12 md:col-span-6 lg:col-span-6">
                        <div className="overflow-hidden">
                            <div className=" rounded-md overflow-hidden hover:scale-105 transition">
                                <Image
                                    src={FeatureImg1}
                                    alt=""
                                    height={1000}
                                    width={1000}
                                    style={{ objectFit: "cover" }}
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
                    <div className=" col-span-12 md:col-span-6 lg:col-span-6">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className=" card overflow-hidden">
                                <div className=" rounded-md overflow-hidden hover:scale-105 transition">
                                    <Image
                                        src={FeatureImg2}
                                        alt=""
                                        height={500}
                                        width={500}
                                        style={{ objectFit: "cover" }}
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
                            <div className=" card overflow-hidden">
                                <div className=" rounded-md overflow-hidden hover:scale-105 transition">
                                    <Image
                                        src={FeatureImg3}
                                        alt=""
                                        height={500}
                                        width={500}
                                        style={{ objectFit: "cover" }}
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
                            <div className=" card overflow-hidden">
                                <div className=" rounded-md overflow-hidden hover:scale-105 transition">
                                    <Image
                                        src={FeatureImg4}
                                        alt=""
                                        height={500}
                                        width={500}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <p className=" text-slate-700 text-sm pt-4">
                                    {data[3]["remark"]}
                                </p>
                                <Link
                                    className=" text-indigo-950 text-xl font-bold"
                                    href={data[1]["live"]}
                                    target=" _blank"
                                >
                                    {data[3]["title"]}
                                </Link>
                            </div>
                            <div className=" card overflow-hidden">
                                <div className=" rounded-md overflow-hidden hover:scale-105 transition">
                                    <Image
                                        src={FeatureImg5}
                                        alt=""
                                        height={500}
                                        width={500}
                                        style={{ objectFit: "cover" }}
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
                                    {data[5]["title"]}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
