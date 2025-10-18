import { ReactNode } from "react";

export default function Placeholder({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          This page is a placeholder. Tell us what you want here and we’ll build it next.
        </p>
        {children}
      </div>
    </section>
  );
}
