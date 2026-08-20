import { AboutHero } from "@/components/features/about/about-hero";
import { EducationAbout } from "@/components/features/about/education";
import { SkillSection } from "@/components/features/home/skills-section";
import { ContactForm } from "@/components/features/contact/contact-form";

export default function AboutPage () {
    return (
        <>
        <AboutHero />
        <EducationAbout />
        <SkillSection />
        <ContactForm />
        </>
    )
}