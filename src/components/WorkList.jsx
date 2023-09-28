import SectionHeader from "./SectionHeader";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/WorkList");
    if (!res.ok) {
        throw new Error("Work List Data Calling Fail");
    }
    return res.json();
}
export default async function WorkList() {
    const data = await getData();
    return (
        <section className=" bg-white py-20">
            <div className=" container mx-auto">
                <SectionHeader
                    sectionHeader={{
                        title: "Work List",
                        desc: "We provide the Perfect Solution to your business growth",
                    }}
                />
                <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => {
                        return (
                            <div
                                key={item["id"]}
                                className="p-8 hover:shadow-lg rounded"
                            >
                                <div className=" bg-green-100 h-16 w-16 flex justify-center items-center rounded-lg">
                                    {/* <svg
                                        className=""
                                        width="34"
                                        height="34"
                                        viewBox="0 0 34 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M29.0027 8.64207C30.7556 8.64206 32.3355 7.58769 33.005 5.97125C33.6744 4.35481 33.3012 2.49513 32.0596 1.26051C30.818 0.0258826 28.953 -0.340165 27.3352 0.333273C25.7175 1.00671 24.6662 2.5868 24.6722 4.33579C24.6803 6.71646 26.6167 8.64208 29.0027 8.64207ZM29.0027 2.46925C30.0358 2.46925 30.8734 3.30493 30.8734 4.33579C30.8734 5.36666 30.0358 6.20234 29.0027 6.20234C27.9696 6.20234 27.132 5.36666 27.132 4.33579C27.132 3.30493 27.9696 2.46925 29.0027 2.46925ZM2.45985 23.3246C2.45985 28.204 5.15538 30.8789 10.0309 30.8789C10.7109 30.8868 11.2602 31.435 11.2682 32.1135C11.2601 32.7896 10.7085 33.3334 10.0309 33.3333C3.84444 33.3333 0 29.4974 0 23.3246V11.317C0 5.12944 3.84444 1.29348 10.0309 1.29348H20.8719C21.5495 1.30153 22.0945 1.85191 22.0945 2.52804C22.0945 2.85413 21.9637 3.16666 21.7312 3.39585C21.4988 3.62505 21.184 3.75184 20.8572 3.74791H10.0309C5.15538 3.74791 2.45985 6.43749 2.45985 11.317V23.3246ZM19.7819 20.1206C19.5756 20.3747 19.2813 20.5425 18.9571 20.5909C18.6344 20.6236 18.3117 20.5286 18.0586 20.3263L13.5366 16.7843L9.47117 22.0606C9.27732 22.3238 8.9858 22.4984 8.66188 22.5453C8.33796 22.5923 8.0087 22.5077 7.7478 22.3104C7.21536 21.8939 7.11694 21.1279 7.52686 20.5909L12.3435 14.3299C12.5444 14.0703 12.8406 13.9012 13.1667 13.8598C13.4928 13.8184 13.8219 13.9083 14.0816 14.1094L18.6036 17.6514L22.5806 12.5809C23.0171 12.1668 23.6909 12.1316 24.1684 12.4981C24.6459 12.8645 24.7846 13.5234 24.4954 14.0506L19.7819 20.1206ZM30.9323 11.317C30.2571 11.317 29.7097 11.8631 29.7097 12.5368V23.3246C29.6655 28.204 26.97 30.8789 22.0945 30.8789H17.1748C16.4948 30.8868 15.9455 31.4349 15.9375 32.1135C15.9456 32.7896 16.4972 33.3334 17.1748 33.3333H22.0945C28.281 33.3333 32.1401 29.4974 32.1401 23.3246V12.5368C32.1402 11.8688 31.6017 11.325 30.9323 11.317Z"
                                            fill="#130F26"
                                        />
                                    </svg> */}
                                    <p className="p-6 text-2xl font-bold text-zinc-700">
                                        {item["step"]}
                                    </p>
                                </div>
                                <div>
                                    <h4 className=" text-2xl font-medium py-3">
                                        {item["title"]}
                                    </h4>
                                    <p>{item["des"]}</p>
                                </div>
                                <div className="pl-10 py-6">
                                    <a
                                        href="#"
                                        className=" align-middle hover:text-green-600 text-lg"
                                    >
                                        Learn More <span>&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
