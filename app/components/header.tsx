"use client";
import Link from "next/link";
import {
  signInWithGoogle,
  signOut,
  onIdTokenChanged,
} from "../lib/firebase/auth.js";
import { setCookie, deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";


function useUserSession(initialUser: any) {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    return onIdTokenChanged(async (authUser: any) => {
      if (authUser) {
        const idToken = await authUser.getIdToken();
        setCookie("__session", idToken);
      } else {
        deleteCookie("__session");
      }
      setUser(authUser);
    });
  }, []);

  return user;
}



export default function Header({ initialUser }: { initialUser: any }) {
  const user = useUserSession(initialUser);

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
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleSignOut = (event: any) => {
    event.preventDefault();
    signOut();
  };

  const handleSignIn = (event: any) => {
    event.preventDefault();
    signInWithGoogle();
  };

  return (
    <div className="site-header">
      <h2 className="logo">Karma.</h2>
      <nav className="site-links">
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
        {user ? (
          <>
            <button onClick={toggleMenu}>
              {!isOpen && user.photoURL && (
                <img
                  src={user.photoURL} width="32" height="32" className="profile-pic"
                  alt={user.displayName || "User"}
                />
              )}
              {isOpen && (
                    <ul>
                      <a href="#">
                        {user.displayName}
                      </a>
                      <li>
                        <a href="#" onClick={handleSignOut}>
                          Sign Out
                        </a>
                      </li>
                    </ul>
              )}
            </button>
          </>
        ) : (
          <div className="profile">
            <a href="#" onClick={handleSignIn}>Sign In</a>
          </div>
        )}
      </nav>
    </div>
  );
}
