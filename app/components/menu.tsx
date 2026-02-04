"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`hamburger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="side-menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {isOpen && <div className="menu-overlay" onClick={closeMenu} />}

      <nav id="side-menu" className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul className="side-menu-list">
          <li>
            <Link href="/kihon" onClick={closeMenu}>
              Everything about Kihon
            </Link>
          </li>
          <li>
            <Link href="/kata" onClick={closeMenu}>
              Everything about Kata
            </Link>
          </li>
          <li>
            <Link href="/kumite" onClick={closeMenu}>
              Everything about Kumite
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
