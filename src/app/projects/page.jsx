import AllProject from "@/components/AllProject";
import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Projects() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Project", subTitle: "project" }}
            />
            <AllProject />
            <Subscribe />
        </div>
    );
}
