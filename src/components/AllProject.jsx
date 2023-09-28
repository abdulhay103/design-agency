import Link from "next/link";
import SectionHeader from "./SectionHeader";
async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllProject");
    if (!res.ok) {
        throw new Error("All Sercices Data Calling Fail");
    }
    return res.json();
}

export default async function AllProject() {
    const data = await getData();
    console.log(data);
    return (
        <section className=" py-16 bg-neutral-50">
            <div className="container mx-auto">
                <SectionHeader
                    sectionHeader={{
                        title: "All Project",
                        desc: "Better Agency/SEO Solution At Your Fingertips",
                    }}
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 pt-10">
                    {data.map((item) => {
                        return (
                            <div
                                key={item["id"]}
                                className=" p-5 lg:p-8 bg-white rounded-lg"
                            >
                                <div className=" rounded-lg overflow-hidden relative">
                                    <img src={item["image"]} alt="" />
                                    <p className=" absolute top-5 left-5 px-6 py-2 bg-white rounded-full text-green-500 font-semibold">
                                        {item["remark"]}
                                    </p>
                                </div>
                                <div className="pt-5">
                                    <Link
                                        className=" text-2xl font-semibold"
                                        href={item["live"]}
                                    >
                                        {item["title"]}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
