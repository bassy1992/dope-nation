import { Music2, Youtube, Instagram, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-background/60">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-accent text-black">
              <Music2 className="h-4 w-4" />
            </div>
            <p className="text-lg font-extrabold tracking-widest uppercase">Dope Nation</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Official site for the duo. New music, videos and tour dates.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide">Connect</p>
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="h-4 w-4" /> YouTube
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:underline" href="mailto:booking@example.com">
                <Mail className="h-4 w-4" /> Booking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide">Streaming</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 hover:underline" href="#listen">
                <ExternalLink className="h-4 w-4" /> Spotify
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:underline" href="#listen">
                <ExternalLink className="h-4 w-4" /> Apple Music
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dope Nation. All rights reserved.
      </div>
    </footer>
  );
}
