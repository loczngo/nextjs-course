"use client";
import { register } from "@/libs/action";
import styles from "./registerForm.module.css";
import { React, useEffect } from "react";
import Link from "next/link";
import {useFormState} from "react-dom"
import { useRouter } from "next/navigation";
export default function RegisterForm() {

    const [state,formAction] = useFormState(register,undefined)

    const router = useRouter()

    useEffect(()=>{
      state?.success && router.push("/login")
    },[state?.success, router])

  return (
    <form action={formAction} className={styles.forms}>
      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Mailing" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirmed password"
        name="passwordAgain"
      />

      <button>Register</button>
      {state?.error && <p style={{ color:" #FFA500"  }}>{state?.error}</p>}
      <span>
        Have an account? <Link href="/login"> Login</Link>{" "}
      </span>
    </form>
  );
}
