import SectionHeader from "@/components/SectionHeader";
import Subscribe from "@/components/Subscribe";

export default function Services() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Services", subTitle: "services" }}
            />
            <h1>Services Page</h1>
            <Subscribe />
        </div>
    );
}
