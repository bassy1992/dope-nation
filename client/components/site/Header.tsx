import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Play } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/tour", label: "Tour" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F78d1ca22690d4d8a8dc57a0c74fe9d4f?format=webp&width=200"
            alt="Dope Nation logo"
            className="h-8 w-8 rounded-full ring-1 ring-white/20"
            loading="eager"
          />
          <span className="text-lg font-extrabold tracking-widest uppercase">Dope Nation</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wide transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#listen"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black shadow-[0_0_0_1px_hsl(var(--accent))] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Play className="h-4 w-4" /> Listen Now
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 md:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-sm uppercase tracking-wide ${
                    isActive ? "bg-accent text-black" : "hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#listen"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-semibold text-black"
            >
              <Play className="h-4 w-4" /> Listen Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
