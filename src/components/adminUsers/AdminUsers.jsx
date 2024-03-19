import React from 'react'
import styles from "./page.module.css"
import { getUsers } from '@/libs/data'
import Image from 'next/image';
import { deleteUser } from '@/libs/action';
export default async function AdminUsers() {

  const users = await getUsers()
  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom:"20px" }} >Users</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.user} style={{ display:"flex",justifyContent:"space-between",marginBottom:"20px" }} >
          <div className={styles.detail} style={{ display:"flex",alignItems:"center",gap:"20px",fontSize:"20px" }}  >
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              style={{ borderRadius:"20px" }}
            > </Image>
            <span>{user.username}</span>
          </div>

          <form action={deleteUser} style={{ display:"flex" }}>
            <input type="hidden" name="id" value={user.id} ></input>
            <button className={styles.deletebutton} style={{marginRight:"30px",padding:"15px",borderRadius:"12px",backgroundColor:"blueviolet",border:"0"  }}  > Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
