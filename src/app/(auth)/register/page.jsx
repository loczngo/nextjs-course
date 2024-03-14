import { register } from "@/libs/action";
import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";
export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}
