import Link from "next/link";
export default function Card({
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