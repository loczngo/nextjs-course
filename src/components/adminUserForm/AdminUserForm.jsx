"use client"
import React from 'react'
import styles from "./page.module.css"
import { AddUser } from '@/libs/action';
import {useFormState} from "react-dom"
export default function AdminUserForm({userId}) {
  const [state, formAction] = useFormState(AddUser, undefined);
  return <form action={formAction} className={styles.container}>
    <h1 style={{ textAlign:"center",margin:"20px" }}>CREATE NEW USER</h1>
      <input name="username" placeholder="Username"></input>
      <input name="email" placeholder="Email"></input>
      <input name="password" placeholder="Password"></input>
      <label htmlFor="">Is Admin?</label>
      <select name="isAdmin" >
          <option value="false">User</option>
          <option value="true">Admin</option>
      </select>
      <button>Add User</button>
      {state && state.error }

  </form>;
}
