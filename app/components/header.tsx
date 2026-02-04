import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="site-header"
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
      }}
    ><nav>  
        <h2 className="site-brand">Karma.</h2>
    </nav>
      <nav
        role="navigation"
        aria-label="Main"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          gap: "24px",
        }}
      >
        <nav >
        <Link   href="/">Home</Link>
        <Link   href="/pages/about">About</Link>
        <Link   href="/pages/Johnson">Johnson</Link>
        <Link   href="/pages/contact">Contact</Link>
        </nav>
      </nav>
    </header>
  );
}
