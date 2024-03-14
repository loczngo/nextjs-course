"use client"
import React from "react";
import styles from "./page.module.css";
import { AddPost } from "@/libs/action";
import { useFormState } from "react-dom";
export default function AdminPostForm({userId}) {
  const [state, formAction] = useFormState(AddPost, undefined);
  return <form action={formAction} className={styles.container}>
      <h1 style={{ textAlign:"center",margin:"20px" }}>CREATE NEW POST</h1>
      <input type="hidden" name="userId" value={userId} />
      <input name="title" placeholder="Title"></input>
      <textarea name="desc" placeholder="Description" row={10}></textarea>
      <input name="slug" placeholder="Slug"></input>
      <input name="img" placeholder="Images"></input>
      <button>Add Post</button>
      {state && state.error }

  </form>;
}
