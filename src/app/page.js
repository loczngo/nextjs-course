// "use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getPosts } from "@/libs/data";
import BLogs from "@/pages/home";
export default function Home() {


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Locz Ngo Agency.</h1>
        <p className={styles.desc}>
          In my agency, i believe my clients such as you deserves a perfect
          solution to digital loaning credits enabling you to handle it more
          effectively and safely, more convinent in a touch of a button without
          being time-consuming{" "}
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Learn more </button>{" "}
          </Link>
          <Link href="/contact">
            {" "}
            <button className={styles.buttonxs}>Contact </button>{" "}
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" className={styles.brandImg} fill />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
      <BLogs />
    </div>
  );
}
