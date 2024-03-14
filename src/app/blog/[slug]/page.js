import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getUser } from "@/libs/data";
import PostUser from "@/components/postUser/page";

const getPost = async (slug ) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Couldn't fetch single post");
  }
  return res.json();
};

export default async function SinglePostPage({params}) {
  const { slug } = params;
  const post = await getPost(slug);
  console.log("singlePost", post);
  // const useriden = post.userId;
  // const user = await getUser(useriden);
  // console.log("user fetched", user);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill src={post.img} />
        </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.flexRow}>
          <PostUser userId={post.userId}></PostUser>

          <div className={styles.textDiv}>
            <h4 className={styles.author}>Published</h4>
            <h5 className={styles.authorname}>
              {post.createdAt.toString().slice(0, 16)}
            </h5>
          </div>
        </div>
        <span className={styles.desc}> {post.desc} </span>
      </div>
    </div>
  );
}
