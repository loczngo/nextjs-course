import LoginForm from "@/components/loginForm/page";
import { handleLoginGithub, login } from "@/libs/action";
import React from "react";
import styles from "./login.module.css"
export default async function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleLoginGithub}   >
          <button style={{ padding:"20px",width:"100%",background:"white",color:"black",borderRadius:"15px",fontWeight:"bolder" }} >Login Auth With GitHub</button>
        </form>
      <LoginForm/> 
      </div>
    </div>
  );
}
