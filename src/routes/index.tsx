import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjwal Prasad Gupta — Video Editor Portfolio" },
      { name: "description", content: "Portfolio of Ujjwal Prasad Gupta, video editor specializing in UGC, Reels, and Podcast editing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
