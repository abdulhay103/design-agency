import { BrandList } from "@/components/BrandList";
import SectionHeader from "@/components/SectionHeader";
import Subscribe from "@/components/Subscribe";

export default function Home() {
    return (
        <main className=" bg-green-200 min-h-screen">
            <h1 className="pt-40">Home Page</h1>
            <BrandList />
            <Subscribe />
        </main>
    );
}
