import SectionHeader from "@/components/SectionHeader";
import Subscribe from "@/components/Subscribe";

export default function Testimonials() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Testimonial", subTitle: "testimonials" }}
            />
            <h1>Testimonial Page</h1>
            <Subscribe />
        </div>
    );
}
