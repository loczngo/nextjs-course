import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill className={styles.img}/>
      </div>
      <div className={styles.formControl}>
        <form className={styles.form}>
          <input className={styles.inputControl} placeholder="Name and Surname"/>
            {" "}
      
          <input
            className={styles.inputControl}
            placeholder="Email address"
         />
          <input
            className={styles.inputControl}
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className={styles.inputControl}
            placeholder="Message"
            cols="30" rows="10"
          ></textarea>
          <button className={styles.submit} type="submit">
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
