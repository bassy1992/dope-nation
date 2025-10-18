import { Play, Headphones, Film, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F43a72c5bd2aa43499c19ce879bde8b21?format=webp&width=1600)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/70 to-black/90" aria-hidden />
        <div className="container flex min-h-[80svh] flex-col items-center justify-center py-20 text-center md:min-h-[88svh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F78d1ca22690d4d8a8dc57a0c74fe9d4f?format=webp&width=200"
            alt="Dope Nation logo"
            className="mb-6 h-20 w-20 rounded-full ring-2 ring-white/20"
          />
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl">
            Big sound. Bold energy.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            New singles, videos and tour dates dropping soon. Tap in and ride the wave.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#listen"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_hsl(var(--accent))] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
            >
              <Headphones className="h-4 w-4" /> Listen Now
            </a>
            <a
              href="#video"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-4 w-4" /> Watch Video
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="listen" className="container py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Stream the latest</h2>
          <p className="mt-3 text-muted-foreground">
            Choose your platform and add it to your playlist.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Spotify", href: "#", color: "bg-[#1DB954]", text: "text-black" },
            { name: "Apple Music", href: "#", color: "bg-black", text: "text-white" },
            { name: "YouTube", href: "#", color: "bg-[#FF0000]", text: "text-white" },
          ].map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-transform hover:-translate-y-1 ${p.color} ${p.text}`}
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_200px_at_10%_-40%,hsl(var(--accent)/0.2),transparent)]" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide opacity-80">Listen on</p>
                  <h3 className="text-2xl font-extrabold">{p.name}</h3>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section id="video" className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="grid h-full w-full place-items-center text-muted-foreground">
              <Film className="h-10 w-10" />
              <p className="mt-2 text-xs">Music video coming soon</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-accent">Exclusive</p>
            <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">Visuals that hit as hard as the beat</h3>
            <p className="mt-3 text-muted-foreground">
              Get notified when the video drops and be first to watch.
            </p>
            <form className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring"
              />
              <button type="submit" className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-black sm:py-0">
                Notify me
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
