import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Dashboard() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Dashboard", subTitle: "dasboard" }}
            />
            <div className="container mx-auto">
                <h1>dashboard</h1>
            </div>
            <Subscribe />
        </div>
    );
}
