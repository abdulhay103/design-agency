export default function SectionHeader({ subHeader }) {
    const { title, subTitle } = subHeader;
    return (
        <section className="py-16 bg-gradient-to-tr from-white via-gray-100 to-green-100">
            <div className="container mx-auto pt-12">
                <h2 className=" text-2xl font-semibold py-2">{title}</h2>
                <p className=" font-semibold">
                    Home <span className=" px-2">&#62;</span>{" "}
                    <span className=" text-green-500">{subTitle}</span>
                </p>
            </div>
        </section>
    );
}
