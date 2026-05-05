import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About Me", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(26, 10, 46, 0.8)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#hero" className="font-orbitron text-white text-sm tracking-[0.3em]">UPG</a>
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-grotesk font-light text-white tracking-[0.15em] text-sm hover:text-purple-300 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="menu"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-grotesk font-light text-white tracking-[0.15em] text-sm block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
