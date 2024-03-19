import React, { Suspense } from "react";
import styles from "./page.module.css";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/libs/auth";
export default async function AdminPage() {
  const session = await auth()
  console.log("user cred",session)
  return (
    <div className={styles.container} style={{ paddingTop:"30px" }} >
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<p>Loading...</p>}>
            {" "}
            <AdminPosts> </AdminPosts>{" "}
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id}></AdminPostForm>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<p>Loading...</p>}>
            {" "}
            <AdminUsers> </AdminUsers>{" "}
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm userId={session.user.id}></AdminUserForm>
        </div>
      </div>
    </div>
  );
}
