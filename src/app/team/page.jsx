import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function TeamList() {
    return (
        <div>
            <SectionHeader subHeader={{ title: "Team", subTitle: "team" }} />
            <Team />
            <Subscribe />
        </div>
    );
}
