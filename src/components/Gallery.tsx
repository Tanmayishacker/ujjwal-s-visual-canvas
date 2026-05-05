const items = [
  { label: "UGC", src: "/assets/ugc-video.mp4" },
  { label: "REEL", src: "/assets/reel-video.mp4" },
  { label: "PODCAST", src: "/assets/podcast-video.mp4" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full bg-black px-6 md:px-12 py-24 flex flex-col justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80')",
        backgroundSize: "cover",
      }}
    >
      <div className="mb-16">
        <h2 className="font-orbitron font-black uppercase text-white text-4xl md:text-6xl tracking-wider">
          My Best Edits
        </h2>
        <div className="rainbow-line w-full max-w-xl mt-3" />
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center">
            <video
              src={it.src}
              controls
              muted
              loop
              playsInline
              className="w-full aspect-square object-cover bg-neutral-900"
            />
            <p className="font-orbitron text-white text-xl md:text-2xl tracking-[0.3em] mt-5">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
