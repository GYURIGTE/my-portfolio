import { HeroBanner } from "@/components/features/home/hero-banner";
import { AboutSection } from "@/components/features/home/about-section";
import { SkillSection } from "@/components/features/home/skills-section";
import { ProjectSection } from "@/components/features/home/projects-section";

export default function HomePage () {
    return (
       <>

       <HeroBanner />
       <AboutSection />
       <SkillSection />
       <ProjectSection />

       </>
    )
}