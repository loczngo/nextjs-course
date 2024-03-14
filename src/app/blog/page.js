import React from "react";
import styles from "./blog.module.css";
import Postcard from "@/components/postcard/postCard";
import { getPosts } from "@/libs/data";


const getData = async () => {
  
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})
      if(!res.ok){
        throw new Error("couldnt fetch posts data")
      }
      return res.json();
}



export default async function page() {
  const posts = await getData();
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
