import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Postcard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && <Image fill src={post.img} className={styles.img} />}
        </div>
        <span className={styles.date}>{post.date}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.bottomTitle}>{post.title}</h1>
        <p className={styles.bottomDesc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}
