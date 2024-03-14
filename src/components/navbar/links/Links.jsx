"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/libs/action";
import { auth } from "@/libs/auth";
export default function Links({session}) {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={link.title}>
            {" "}
          </NavLink>
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <form action={handleLogout}>
            <button className={styles.buttonLog}>Logout</button>

            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>
      <button className={styles.buttonOpen} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
