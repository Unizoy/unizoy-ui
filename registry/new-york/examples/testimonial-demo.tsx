
import { Testimonial } from "@/registry/new-york/ui/testimonial"

export default function TestimonialDemo() {
    const testimonialDetails = [
        {
            title: "Unizoy",
            subTitle: "Explore Our Story",
            description:
                "Unizoy stands apart through our dedication \n and genuine care for our clients. \n We may not be the biggest,  but we’re \n a team you can trust and enjoy   \nworkin g with. Let us help you build a brand \n that truly connects.",
        },
        {
            title: "Pure Hearts",
            subTitle: "We are More Than Just a Web Agency",
            description:
                "We believe in making meaningful connections.\n Every project we take on is handled \n  with sincerity and a genuine desire to \n  help our clients succeed. It's not just about \n  business, it's about creating lasting, impactful \n  relationships. ",
        },
        {
            title: "Happy Clients",
            subTitle: "Building Trust Through Every Project",
            description:
                "Client satisfaction is our top priority.\n  We focus on collaboration, transparency, and personalized \n  service to ensure that every project is a success. \n Our goal is to make every client \n  feel valued and supported.",
        },

    ];
    return (
        <Testimonial data={testimonialDetails}
            backgroundUrl="https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4"
            backgroundClassName="absolute top-0 left-0 w-screen h-[90vh] object-cover -z-0 opacity-25"
            containerClassName=" bg-black text-white w-screen h-[90vh]"
            animationDuration={4000}
            contentWrapperClassName="w-full md:w-11/12 lg:w-10/12 p-10"
            titleTextClassName="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]"
            subtitleTextClassName="text-2xl lg:text-3xl font-semibold"
            descriptionTextClassName="text-base md:text-lg text-white/90"
        />
    )
}
