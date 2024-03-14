"use client";
import styles from "./loginForm.module.css";
import { React, useEffect } from "react";
import Link from "next/link";
import {useFormState} from "react-dom"
import { useRouter } from "next/navigation";
import { login } from "@/libs/action";
export default function LoginForm() {

    const [state,formAction] = useFormState(login,undefined)

   
  return (
    <form action={formAction} className={styles.forms}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
  
      <button>Login</button>
      {state?.error && <p style={{ color:" #FFA500"  }}>{state?.error}</p>}
      <span>
        Don't have an account? <Link href="/register"> Register</Link>{" "}
      </span>
    </form>
  );
}
