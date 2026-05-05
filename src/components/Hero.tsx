import { motion } from "framer-motion";
import heroPhoto from "@/assets/HeroIMG.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, #3b0080 0%, #1a0040 35%, #000000 75%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="order-2 md:order-1 md:pl-[8%]">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="font-grotesk font-light text-white text-lg md:text-xl mb-3 tracking-wide"
          >
            Hello I'm
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="font-orbitron font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Ujjwal Prasad<br />Gupta
          </motion.h1>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center items-end">
          <div
            className="purple-glow absolute bottom-0 left-1/2 w-[80%] h-[60%] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(150, 60, 255, 0.85) 0%, rgba(80, 0, 180, 0.4) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <motion.img
            src={heroPhoto}
            alt="Ujjwal Prasad Gupta"
            width={768}
            height={1024}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 max-h-[80vh] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
