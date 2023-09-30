export default function Subscribe() {
    return (
        <section className=" py-20 bg-white">
            <div className=" container mx-auto px-6 md:px-0 lg:px-0">
                <div className="w-full md:w-1/2 lg:1/2 mx-auto">
                    <div className="px-5 pb-10">
                        <p className="text-green-500 uppercase text-xl font-medium text-center pb-4">
                            Subscribe
                        </p>
                        <h2 className=" text-3xl font-bold capitalize text-center">
                            Subscribe to get the latest news about us
                        </h2>
                        <p className=" text-zinc-500 text-sm text-center pt-4">
                            Please drop your email below to get daily update
                            about what we do
                        </p>
                    </div>
                    <div className=" flex border border-black rounded-md justify-between">
                        <input
                            className="px-6 py-4 focus:outline-none rounded-md placeholder:text-zinc-500 w-full"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email Address"
                        />
                        <button
                            className=" bg-orange-600 text-white rounded-md m-1 px-4"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
