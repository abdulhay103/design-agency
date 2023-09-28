import Image from "next/image";
import SectionHeader from "./SectionHeader";
import TeamMember1 from "public/Team/team-member1.png";
import TeamMember2 from "public/Team/team-member2.png";
import TeamMember3 from "public/Team/team-member3.png";
import Facebook from "public/social/facebook.svg";
import Twiter from "public/social/twiter.svg";
import Instragram from "public/social/instragram.svg";

import Link from "next/link";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TeamList");
    if (!res.ok) {
        throw new Error("Team List Data Calling Fail");
    }
    return res.json();
}

export default async function Team() {
    const data = await getData();
    return (
        <section className=" py-16">
            <div className="container mx-auto">
                <SectionHeader
                    sectionHeader={{
                        title: "Our Team Member",
                        desc: "Check our awesome team members",
                    }}
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 pt-10">
                    {data.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className=" rounded-lg overflow-hidden shadow-md border-2 border-slate-200"
                            >
                                <div className=" overflow-hidden relative">
                                    <Image
                                        className=" object-cover"
                                        src={item["image"]}
                                        alt="Devon Lane"
                                        width={500}
                                        height={385}
                                    />
                                    <div className="absolute bottom-4 left-1/4 flex gap-5 px-8 bg-white py-4 rounded-full">
                                        <Link
                                            className=" hover:scale-110"
                                            href={item["facebook"]}
                                        >
                                            <svg
                                                width="10"
                                                height="16"
                                                viewBox="0 0 10 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z"
                                                    fill="#737588"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            className=" hover:scale-110"
                                            href={item["twitter"]}
                                        >
                                            <svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                                    fill="#737588"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            className=" hover:scale-105"
                                            href={item["instagram"]}
                                        >
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 3.40625C9.96875 3.40625 11.5938 5.03125 11.5938 7C11.5938 9 9.96875 10.5938 8 10.5938C6 10.5938 4.40625 9 4.40625 7C4.40625 5.03125 6 3.40625 8 3.40625ZM8 9.34375C9.28125 9.34375 10.3125 8.3125 10.3125 7C10.3125 5.71875 9.28125 4.6875 8 4.6875C6.6875 4.6875 5.65625 5.71875 5.65625 7C5.65625 8.3125 6.71875 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C15 5.28125 15 8.75 14.9375 9.90625C14.875 11.0312 14.625 12 13.8125 12.8438C13 13.6562 12 13.9062 10.875 13.9688C9.71875 14.0312 6.25 14.0312 5.09375 13.9688C3.96875 13.9062 3 13.6562 2.15625 12.8438C1.34375 12 1.09375 11.0312 1.03125 9.90625C0.96875 8.75 0.96875 5.28125 1.03125 4.125C1.09375 3 1.34375 2 2.15625 1.1875C3 0.375 3.96875 0.125 5.09375 0.0625C6.25 0 9.71875 0 10.875 0.0625C12 0.125 13 0.375 13.8125 1.1875C14.625 2 14.875 3 14.9375 4.125ZM13.4375 11.125C13.8125 10.2188 13.7188 8.03125 13.7188 7C13.7188 6 13.8125 3.8125 13.4375 2.875C13.1875 2.28125 12.7188 1.78125 12.125 1.5625C11.1875 1.1875 9 1.28125 8 1.28125C6.96875 1.28125 4.78125 1.1875 3.875 1.5625C3.25 1.8125 2.78125 2.28125 2.53125 2.875C2.15625 3.8125 2.25 6 2.25 7C2.25 8.03125 2.15625 10.2188 2.53125 11.125C2.78125 11.75 3.25 12.2188 3.875 12.4688C4.78125 12.8438 6.96875 12.75 8 12.75C9 12.75 11.1875 12.8438 12.125 12.4688C12.7188 12.2188 13.2188 11.75 13.4375 11.125Z"
                                                    fill="#737588"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="text-gray-900 text-2xl font-semibold text-center py-4">
                                    {item["name"]}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
