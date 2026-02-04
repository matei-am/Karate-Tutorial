"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header"; 


export default function HomePage() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px" }} className="page">
      <Header />

      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 24,
          alignItems: "center",
          padding: 24,
          border: "1px solid #e5e7eb",
          borderRadius: 16,
        }}
      >
        <div>
          <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0 }}>
            Learn Karate: Basics, Kata, and Self-Discipline
          </h1>

          <p style={{ fontSize: 18, marginTop: 14, color: "#374151" }}>
            A beginner-friendly guide to karate fundamentals—stances, strikes,
            blocks, kata, and dojo etiquette. Train smarter, stay safe, and
            build confidence.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <Link
              href="/lessons"
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                background: "#111827",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Start Lessons
            </Link>

            <Link
              href="/kata"
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid #d1d5db",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore Kata
            </Link>
          </div>

          <p style={{ marginTop: 12, fontSize: 13, color: "#6b7280" }}>
            Tip: Warm up first. Practice on a non-slip surface. Stop if you feel pain.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: 260,
            borderRadius: 14,
            overflow: "hidden",
            background: "#f3f4f6",
          }}
        >
          {/* Put an image in /public, e.g. /public/karate-hero.jpg */}
          <Image
            src="/KarateFrontPage.jpg"
            alt="Karate training"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* QUICK PATHS */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ margin: "0 0 12px 0" }}>Choose your path</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          <Card
            title="Beginner Basics"
            desc="Stances, guard, footwork, and how to punch safely."
            href="/basics"
            cta="Learn basics"
          />
          <Card
            title="Kihon Drills"
            desc="Structured repetition to build clean technique and timing."
            href="/kihon"
            cta="Train kihon"
          />
          <Card
            title="Dojo Etiquette"
            desc="Respect, safety, and the culture behind training."
            href="/etiquette"
            cta="Read etiquette"
          />
        </div>
      </section>

      {/* FEATURED LESSONS */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ margin: "0 0 12px 0" }}>Featured lessons</h2>

        <div style={{ display: "grid", gap: 12 }}>
          <LessonRow
            title="Front stance (Zenkutsu-dachi)"
            meta="5–8 min • fundamentals"
            href="/lessons/front-stance"
          />
          <LessonRow
            title="Straight punch (Oi-zuki)"
            meta="6–10 min • technique"
            href="/lessons/oi-zuki"
          />
          <LessonRow
            title="Down block (Gedan-barai)"
            meta="6–10 min • defense"
            href="/lessons/gedan-barai"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 40, paddingTop: 16, borderTop: "1px solid #e5e7eb" }}>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
          © {new Date().getFullYear()} AU Addmissions • Built with Next.js • by Matei Mihalache
        </p>
      </footer>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: 16,
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <p style={{ margin: "0 0 12px 0", color: "#4b5563" }}>{desc}</p>
      <Link href={href} style={{ color: "#111827", fontWeight: 600, textDecoration: "none" }}>
        {cta} →
      </Link>
    </div>
  );
}

function LessonRow({
  title,
  meta,
  href,
}: {
  title: string;
  meta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: 14,
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        textDecoration: "none",
        color: "#111827",
      }}
    >
      <span style={{ fontWeight: 600 }}>{title}</span>
      <span style={{ color: "#6b7280", fontSize: 13 }}>{meta}</span>
    </Link>
  );
}

