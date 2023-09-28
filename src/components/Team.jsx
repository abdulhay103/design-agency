import Image from "next/image";
import SectionHeader from "./SectionHeader";
import TeamMember1 from "../../public/Team/team-member1.png";
import TeamMember2 from "../../public/Team/team-member2.png";
import TeamMember3 from "../../public/Team/team-member3.png";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TeamList");
    if (!res.ok) {
        throw new Error("Team List Data Calling Fail");
    }
    return res.json();
}

export default async function Team() {
    const data = await getData();
    console.log(data);
    return (
        <section className=" py-16">
            <div className="container mx-auto">
                <SectionHeader
                    sectionHeader={{
                        title: "Our Team Member",
                        desc: "Check our awesome team members",
                    }}
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                    <div className=" rounded-lg overflow-hidden shadow-md">
                        <div className=" overflow-hidden">
                            <Image
                                className=" object-cover"
                                src={TeamMember1}
                                alt="Devon Lane"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <h3 className="text-gray-900 text-2xl font-semibold text-center py-4">
                            Devon Lane
                        </h3>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-md">
                        <div className=" overflow-hidden">
                            <Image
                                className=" object-cover"
                                src={TeamMember2}
                                alt="Devon Lane"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <h3 className="text-gray-900 text-2xl font-semibold text-center py-4">
                            Devon Lane
                        </h3>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-md">
                        <div className=" overflow-hidden">
                            <Image
                                className=" object-cover"
                                src={TeamMember3}
                                alt="Devon Lane"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <h3 className="text-gray-900 text-2xl font-semibold text-center py-4">
                            Devon Lane
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
