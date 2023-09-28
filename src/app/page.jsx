import FeatureProject from "@/components/FeatureProject";
import HeroBanner from "@/components/Hero";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
    return (
        <main className=" bg-green-200 min-h-screen">
            <HeroBanner />
            <WorkList />
            <StatList />
            <FeatureProject />
            <Subscribe />
        </main>
    );
}
