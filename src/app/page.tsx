import Hero from "@/components/Home/Hero/Hero";
import TextGrid from "@/components/TextGrid.tsx/TextGrid";
export default function Home() {
  return (
    <main>
      <section style={{ height: "80vh" }}>
        <Hero />
      </section>
      <section style={{ height: "80vh" }}>
        <TextGrid />
      </section>
    </main>
  );
}
