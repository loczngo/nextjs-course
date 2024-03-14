import { AddPost } from "@/libs/action";
import React from "react";

export default function page() {
  return (
    <div>
      <form action={AddPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc" ></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <input type="text" placeholder="userId"></input>
        <button>create</button>
      </form>
    </div>
  );
}
