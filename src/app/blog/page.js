import React from "react";
import styles from "./blog.module.css";
import Postcard from "@/components/postcard/postCard";
import { getPosts } from "@/libs/data";
export default async function page() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.postContainer}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
}
