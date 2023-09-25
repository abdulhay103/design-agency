import SectionHeader from "@/components/SectionHeader";
import Subscribe from "@/components/Subscribe";

export default function Projects() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Project", subTitle: "project" }}
            />
            <h1>Project Page</h1>
            <Subscribe />
        </div>
    );
}
