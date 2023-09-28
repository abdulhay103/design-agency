import AllServices from "@/components/AllServices";
import AllProject from "@/components/AllServices";
import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Services() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Services", subTitle: "services" }}
            />
            <AllServices />
            <Subscribe />
        </div>
    );
}
