import Link from "next/link";
export default function Header() {
  return (
    <div className="site-header">
        <h2 className="logo">Karma.</h2>
        <nav className="site-links">
        <Link   href ="/">Home</Link>
        <Link   href="/pages/about">About</Link>
        <Link   href="/pages/Johnson">Johnson</Link>
        <Link   href="/pages/contact">Contact</Link>
        </nav>
    </div>
  );
}
