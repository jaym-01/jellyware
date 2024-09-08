import Hero from "@/components/Home/Hero/Hero";
import TextGrid from "@/components/TextGrid.tsx/TextGrid";
import AboutMe from "../components/Home/AboutMe/AboutMe";
export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
    </main>
  );
}
