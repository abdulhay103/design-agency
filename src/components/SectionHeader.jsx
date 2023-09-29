export default function SectionHeader({ sectionHeader }) {
    const { title, desc } = sectionHeader;
    return (
        <>
            <div className=" w-full md:w-1/2 lg:w-1/2">
                <p className=" uppercase text-green-500 font-medium text-lg">
                    {title}
                </p>
                <h3 className=" text-3xl font-semibold py-3">{desc}</h3>
            </div>
        </>
    );
}
