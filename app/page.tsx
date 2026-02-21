"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Card from "./components/card";

export default function HomePage() {
  return (
    <>
      <Header initialUser={null} />
      <main className="hero">
        {/* HERO */}
        <section className="hero-section">
          <div>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0 }}>
              Learn Karate: Strength, Respect, and Discipline
            </h1>

            <p style={{ fontSize: 18, marginTop: 14, color: "#374151" }}>
              A beginner-friendly guide to karate fundamentals—stances, strikes,
              blocks, kata, and dojo etiquette. Train smarter, stay safe, and
              build confidence.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <Link
                href="/kumite/training-tips"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "#111827",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Start Kumite
              </Link>

              <Link
                href="/kata/kata-list"
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
            <div className="hero-image-container">
            <div className="hero-image">
              <Image
                src="/KarateFrontPage.jpg"
                alt="Karate training"
                fill
                style={{ objectFit: "cover", objectPosition: "center"}}
              />
            </div>
            </div>
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
              href="/kihon/basics"
              cta="Learn basics"
            />
            <Card
              title="Kihon Drills"
              desc="Structured repetition to build clean technique and timing."
              href="/kihon/techniques"
              cta="Train kihon"
            />
            <Card
              title="Dojo Etiquette"
              desc="Respect, safety, and the culture behind training."
              href="/dojo-etiquette/rules"
              cta="Read etiquette"
            />
          </div>
        </section>

        {/* FEATURED LESSONS */}
        <section style={{ marginTop: 28 }}>
          <h2 style={{ margin: "0 0 12px 0" }}>Featured lessons</h2>

          <div style={{ display: "grid", gap: 12 }}>
            <LessonRow
              title="Hierarchy - Belt colors and rank system explained"
              meta="6–10 min • technique"
              href="/belts"
            />
            <LessonRow
              title="Front stance (Zenkutsu-dachi)"
              meta="5–8 min • fundamentals"
              href="/kihon/stances"
            />
            <LessonRow
              title="Preparing for competition: Kumite training tips"
              meta="6–10 min • defense"
              href="/kumite/training-tips"
            />
          </div>
        </section>

  
      </main>
    </>
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

