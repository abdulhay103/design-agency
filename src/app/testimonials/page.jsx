import AllTestimonial from "@/components/AllTestimonial";
import SectionHeader from "@/components/PageHeader";
import Subscribe from "@/components/Subscribe";

export default function Testimonials() {
    return (
        <div>
            <SectionHeader
                subHeader={{ title: "Testimonial", subTitle: "testimonials" }}
            />
            <AllTestimonial />
            <Subscribe />
        </div>
    );
}
