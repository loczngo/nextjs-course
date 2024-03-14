import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/libs/auth";
import Image from "next/image";
export default async function Navbar() {
  const session = await auth()
  console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.logo}><Image src="/agency.gif" width={250} height={150} ></Image></div>
      <div>
        <Links session={session}></Links>
      </div>
    </div>
  );
}
