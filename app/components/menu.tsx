"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { title } from "process";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (dropdown: string) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        setExpandedDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuItems = [
    {
      title: "Everything about Kihon",
      className: "menu-item-with-dropdown",
      key: "kihon",
      submenu: [
        
        { className: "menu-toggle", title: "Basics", href: "/kihon/basics" },
        { className: "menu-toggle", title: "Stances", href: "/kihon/stances" },
        { className: "menu-toggle", title: "Techniques", href: "/kihon/techniques" },
      ],
    },
    {
      title: "Everything about Kata",
      key: "kata",
      submenu: [
        { className: "menu-toggle", title: "Kata List", href: "/kata/kata-list" },
        { className: "menu-toggle", title: "Techniques", href: "/kata/techniques" },
        { className: "menu-toggle", title: "Practice Tips", href: "/kata/practice-tips" },
      ],
    },
    {
      title: "Everything about Kumite",
      key: "kumite",
      submenu : [
        { className: "menu-toggle", title: "Rules", href: "/kumite/rules" },
        { className: "menu-toggle", title: "Strategies", href: "/kumite/strategies" },
        { className: "menu-toggle", title: "Training & Tips", href: "/kumite/training-tips" },
      ],
    },
    {
      title: "Belt Progression",
      key: "belt",
      submenu: [
        { className: "menu-toggle", title: "White Belt", href: "/belts" },
        { className: "menu-toggle", title: "Yellow Belt", href: "/belts" },
        { className: "menu-toggle", title: "Orange Belt", href: "/belts" },
        { className: "menu-toggle", title: "Green Belt", href: "/belts" },
        { className: "menu-toggle", title: "Blue Belt", href: "/belts" },
        { className: "menu-toggle", title: "Brown Belt", href: "/belts" },
        { className: "menu-toggle", title: "Black Belt", href: "/belts" },
      ],
    },
    {
      title: "Dojo Etiquette",
      key: "etiquette",
      submenu: [
        { className: "menu-toggle", title: "History", href: "/dojo-etiquette/history" },
        { className: "menu-toggle", title: "Etiquette Rules", href: "/dojo-etiquette/rules" },
      ],
    },
  ];

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
          {menuItems.map((item) => (
            <li key={item.key} className="menu-item-with-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown(item.key)}
                aria-expanded={expandedDropdown === item.key}
              >
                {item.title}
                <span className="dropdown-arrow">▼</span>
              </button>

              {expandedDropdown === item.key && (
                <ul className="submenu">
                  {item.submenu.map((subitem) => (
                    <li key={subitem.href}>
                      <Link href={subitem.href} onClick={closeMenu}>
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
