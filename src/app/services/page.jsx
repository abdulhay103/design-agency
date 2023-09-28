import AllProject from "@/components/AllProjects";
import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Services() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Services", subTitle: "services" }}
            />
            <AllProject />
            <Subscribe />
        </div>
    );
}
