import { Linkedin, Youtube, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen w-full bg-black flex flex-col">
      <div className="rainbow-bar w-full h-10" />
      <div className="flex-1 flex flex-col justify-between py-20 px-[8%]">
        <div className="space-y-3">
          <p className="font-grotesk text-white text-lg">Example@gmail.com</p>
          <p className="font-grotesk text-white text-lg">Location</p>
          <p className="font-grotesk text-white text-lg">EXAPHNNumber</p>
        </div>
        <div className="flex justify-center gap-12 mt-16">
          {[Linkedin, Youtube, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-white transition-transform hover:scale-110 inline-block"
              aria-label="social"
            >
              <Icon size={40} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
