import Link from "next/link";
import LoginButton from "./login";
import {
  signInWithGoogle,
  signOut,
  onIdTokenChanged,
} from "../lib/firebase/auth.js";
import { setCookie, deleteCookie } from "cookies-next";
import { useEffect } from "react";
import React from "react";


function useUserSession(initialUser: any) {
  useEffect(() => {
    return onIdTokenChanged(async (user: any) => {
      if (user) {
        const idToken = await user.getIdToken();
        await setCookie("__session", idToken);
      } else {
        await deleteCookie("__session");
      }
      if (initialUser?.uid === user?.uid) {
        return;
      }
      window.location.reload();
    });
  }, [initialUser]);

  return initialUser;
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
              <img
                className="profileImage"
                src={user.photoURL || "/profile.svg"}
                alt={user.email}
              />
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
            <img src="/profile.svg" alt="A placeholder user image" />
            Sign In with Google
          </a>
        </div>
      )}
        <LoginButton />
        </nav>
    </div>
  );
}
