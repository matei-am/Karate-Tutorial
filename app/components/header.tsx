"use client";
import Link from "next/link";
import {
  signInWithGoogle,
  signOut,
  onIdTokenChanged,
} from "../lib/firebase/auth.js";
import { setCookie, deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";
import React from "react";


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
        <Link   href ="/">Home</Link>
        <Link   href="/pages/about">About</Link>
        <Link   href="/pages/contact">Contact</Link>
          {user ? (
        <>
          <div className="profile">
            <p>
              {user.displayName}
            </p>

            <div className="menu">
              ...
              <ul>
                <li>{user.displayName}</li>
                <li>
                  <a href="#" onClick={handleSignOut}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="profile">
          <a href="#" onClick={handleSignIn}>
            
            Sign In
          </a>
        </div>
      )}
        </nav>
    </div>
  );
}
