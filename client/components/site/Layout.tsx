import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-foreground">
      <Header />
      <main className="pt-16">{/* offset for fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
