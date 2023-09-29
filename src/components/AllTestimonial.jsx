import Image from "next/image";
import SectionHeader from "./SectionHeader";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
    if (!res.ok) {
        throw new Error("Testimonial Data Calling Fail");
    }
    return res.json();
}

export default async function AllTestimonial() {
    const data = await getData();
    console.log(data);
    return (
        <section className=" py-16">
            <div className="container mx-auto px-6 md:px-0 lg:px-0">
                <SectionHeader
                    sectionHeader={{
                        title: "Testimonial List",
                        desc: "Better Agency/SEO Solution At Your Fingertips",
                    }}
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 lg:pt-14">
                    {data.map((item) => {
                        return (
                            <div
                                key={item["id"]}
                                className=" shadow-lg p-5 lg:p-7"
                            >
                                <div className=" rounded-lg overflow-hidden w-[100px] mx-auto">
                                    <Image
                                        src={item.image}
                                        width={150}
                                        height={150}
                                        alt={item["name"]}
                                    />
                                </div>
                                <div className=" py-5">
                                    <p className=" text-center text-neutral-500">
                                        {item["msg"]}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className=" text-2xl font-bold uppercase">
                                        {item["name"]}
                                    </h3>
                                    <p className=" font-semibold pt-3">
                                        {item["designation"]}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
