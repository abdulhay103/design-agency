import Link from "next/link";

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
        <section className=" bg-green-100 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10 xl:py-24">
                <div>
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
                <div>
                    <div className="flex">
                        <div className="">
                            <img src={data["image2"]} alt="Image2" />
                        </div>
                        <div className=" flex-grow">
                            <img src={data["image1"]} alt="Image1" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className=" flex-grow">
                            <img src={data["image3"]} alt="Image3" />
                        </div>
                        <div>
                            <img src={data["image4"]} alt="Image4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
