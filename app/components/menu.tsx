'use client'; // REQUIRED in Next.js App Router when using state

import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="navbar">
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li>
            <Link href="/kihon" className="nav-link" onClick={closeMenu}>
              Everything about Kihon
            </Link>
          </li>
          <li>
            <Link href="/kata" className="nav-link" onClick={closeMenu}>
              Everything about Kata
            </Link>
          </li>
          <li>
            <Link href="/kumite" className="nav-link" onClick={closeMenu}>
              Everything about Kumite
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`hamburger-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </>
  );
}
