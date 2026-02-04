"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
        { className: "menu-toggle", title: "Strikes", href: "/kihon/strikes" },
      ],
    },
    {
      title: "Everything about Kata",
      key: "kata",
      submenu: [
        { className: "menu-toggle", title: "Kata List", href: "/kata/list" },
        { className: "menu-toggle", title: "Techniques", href: "/kata/techniques" },
        { className: "menu-toggle", title: "Practice Tips", href: "/kata/tips" },
      ],
    },
    {
      title: "Everything about Kumite",
      key: "kumite",
      submenu : [
        { className: "menu-toggle", title: "Rules", href: "/kumite/rules" },
        { className: "menu-toggle", title: "Strategies", href: "/kumite/strategies" },
        { className: "menu-toggle", title: "Training", href: "/kumite/training" },
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
