import React from 'react'
import styles from "./page.module.css"
import { getUser } from '@/libs/data';
import Image from 'next/image';
export default async function PostUser({userId}) {
    const user = await getUser(userId);
  return (
   <div style={{ display:"flex",gap:"30px",alignItems:"center" }}>
           <div className={styles.imgContainers}>
            <Image
              src={user.img ? user.img : "/noavatar.png"}
              className={styles.imgs}
              fill
            ></Image>
          </div>
          <div className={styles.textDiv}>
            <h4 className={styles.author}>Author</h4>
            <h5 className={styles.authorname}>{user.username}</h5>
          </div>

   </div>
  )
}
