import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
export default function page() {
  return (
    <div className={styles.container}>
          <div className={styles.textContainer}>
            <h4 className={styles.textFirst}> About Agency </h4>
            <h1 className={styles.textSecond}>We create digital loans that are effective, broader, convinent for you.</h1>
            <p className={styles.desc}>We believe in the digital credits we create, by leveraging artifical intelligent as well as complex algorithm. We're confident in out precision and solution that we provides for you and your closed one. delivering a sustainable products with maintenance services</p>
          <div className={styles.wrappers}> 
              <div className={styles.wrap}>
                <h4 className={styles.textWrap}>10 K+</h4>
                <p className={styles.descWrap}>Year of experience</p>
              </div>
              <div className={styles.wrap}>
                <h4 className={styles.textWrap}>234 K+</h4>
                <p className={styles.descWrap}>People reached</p>
              </div>
              <div className={styles.wrap}>
                <h4 className={styles.textWrap}>5 K+</h4>
                <p className={styles.descWrap}>services and plugin</p>
              </div>

          
          </div>
        
          </div>

          <div className={styles.imgContainer}>
             <Image src="/about.png" fill />

          </div>

    </div>
  )
}
