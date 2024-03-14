"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
export default function Links() {
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
  const session = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={link.title}>
            {" "}
          </NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <button className={styles.buttonLog}>Logout</button>
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
