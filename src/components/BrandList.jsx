async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/BrandList");
    if (!res.ok) {
        throw new Error("Brands List Calling Fail");
    }
    return res.json();
}
export async function BrandList() {
    const data = await getData();
    // console.log(data);
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto text-center px-6 md:px-0 lg:px-0">
                <div className="flex flex-wrap">
                    {data.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="mb-8 md:lg:mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4"
                            >
                                <a href="#">
                                    <img
                                        className="mx-auto h-8"
                                        src={item["image"]}
                                        alt={item["name"]}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
