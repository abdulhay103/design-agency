export default function Subscribe() {
    return (
        <section>
            <div className=" container mx-auto">
                <div className=" w-1/2 mx-auto">
                    <div className="px-10">
                        <p className="text-green-500 uppercase font-semibold text-center">
                            Subscribe
                        </p>
                        <h2 className="text-xl font-bold">
                            Subscribe to get the latest news about us
                        </h2>
                        <p>
                            Please drop your email below to get daily update
                            about what we do
                        </p>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email Address"
                        />
                        <button
                            className=" bg-orange-600 text-black"
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
