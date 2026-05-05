export function About() {
  const services = ["UGC Editing", "Reels Editing", "Podcast Editing"];
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-black px-6 py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.92), rgba(0,0,0,0.92)), url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[900px] w-full mx-auto text-center">
        <h2 className="font-orbitron font-black uppercase text-white text-4xl md:text-6xl tracking-wider mb-3">
          About Me
        </h2>
        <div className="rainbow-line mx-auto w-full max-w-md mb-10" />
        <p className="font-serif-italic text-white text-lg md:text-xl leading-[1.8] mb-16">
          Where silence speaks and every frame breathes. I'm a video editor who
          believes the most powerful stories are told not in what you show — but
          in how you show it. Clean cuts. Intentional pacing. Timeless visuals.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {services.map((s) => (
            <div key={s} className="font-serif-italic text-white text-2xl md:text-3xl flex items-center gap-3">
              {s} <span style={{ color: "#00ff88" }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
