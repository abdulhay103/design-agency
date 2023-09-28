import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Team() {
    return (
        <div>
            <SectionHeader subHeader={{ title: "Team", subTitle: "team" }} />
            <h1>Team Page</h1>
            <Subscribe />
        </div>
    );
}
