import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="container grid min-h-[60svh] place-items-center py-20">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="mt-3 text-muted-foreground">This page doesn’t exist yet.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-accent px-5 py-2 text-sm font-semibold text-black">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
