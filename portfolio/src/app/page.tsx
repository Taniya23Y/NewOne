"use client";

import { GithubStarsButton } from "@/components/GithubStarsButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutSection } from "@/sections/About";
import CertificationsSection from "@/sections/Certifications";
import { ContactSection } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { EducationSection } from "@/sections/Education";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ResumePreview } from "@/sections/ResumePreview";
import { Skills } from "@/sections/Skills";
import { SocialLinkSection } from "@/sections/SocialLink";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ResumePreview />
      <AboutSection />
      <ProjectsSection />
      <TapeSection />
      <Skills />
      <EducationSection />
      <Experience />
      <SocialLinkSection />
      <TestimonialsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <GithubStarsButton />
      <ScrollToTop />
    </div>
  );
}
