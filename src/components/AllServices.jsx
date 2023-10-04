import SectionHeader from "./SectionHeader";
async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllService");
    if (!res.ok) {
        throw new Error("All Sercices Data Calling Fail");
    }
    return res.json();
}

export default async function AllServices() {
    const data = await getData();
    return (
        <section className=" py-16 bg-neutral-50">
            <div className="container mx-auto px-6 md:px-0 lg:px-0">
                <SectionHeader
                    sectionHeader={{
                        title: "Our All Services",
                        desc: "We Provide BestWeb design services",
                    }}
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 pt-10">
                    {data.map((item) => {
                        return (
                            <div
                                key={item["id"]}
                                className=" p-5 lg:p-8 bg-white rounded-lg"
                            >
                                <div>
                                    <h3 className=" text-2xl font-semibold uppercase">
                                        {item["tag"]}
                                    </h3>
                                    <p className=" text-neutral-500 capitalize py-2">
                                        {item["des"]}
                                    </p>
                                </div>
                                <div className="grid grid-cols-12 gap-5 lg:gap-7">
                                    <div className=" col-span-7">
                                        <div className=" w-full h-32 md:lg:h-40 overflow-hidden">
                                            <img
                                                className=" w-full h-full object-cover rounded-lg"
                                                src={item["image1"]}
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-span-5">
                                        <div className=" w-full h-32 md:lg:h-40 overflow-hidden">
                                            <img
                                                className=" w-full h-full object-cover rounded-lg"
                                                src={item["image2"]}
                                                alt="image"
                                            />
                                        </div>
                                    </div>

                                    <div className=" col-span-6">
                                        <div className=" w-full h-48 md:lg:h-64 overflow-hidden">
                                            <img
                                                className=" w-full h-full object-cover rounded-lg"
                                                src={item["image3"]}
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-span-6 rounded-lg overflow-hidden">
                                        <div className=" w-full h-48 md:lg:h-64 overflow-hidden">
                                            <img
                                                className=" w-full h-full object-cover rounded-lg"
                                                src={item["image4"]}
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
