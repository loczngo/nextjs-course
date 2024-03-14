import React from "react";
import styles from "./page.module.css";
import { getPosts } from "@/libs/data";
import Image from "next/image";
import { deletePost } from "@/libs/action";
export default async function AdminPosts() {
  const posts = await getPosts();
 

  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom:"20px" }}>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className={styles.img}
            ></Image>
            <span>{post.title}</span>
          </div>
          <form action={deletePost} className={styles.formReg}>
            <input type="hidden" name="id" value={post.id} ></input>
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
