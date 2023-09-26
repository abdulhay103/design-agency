import { BrandList } from "@/components/BrandList";
import HeroBanner from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
    return (
        <main className=" bg-green-200 min-h-screen">
            <HeroBanner />
            <BrandList />
            <WorkList />
            <StatList />
            <Subscribe />
        </main>
    );
}
