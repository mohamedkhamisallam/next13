import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import hero from "../../public/images/undraw_home_cinema_l7yl.png";
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.title}>
            {" "}
            this is our site to follw your dreams...
          </h1>
          <p className={styles.description}>
            you can find what ever you wantyou can find what ever you wantyou
            can find what ever you wantyou can find what ever you wantyou can
            find what ever you wantyou can find what ever you wantyou can find
            what ever you want
          </p>
          <button className={styles.button}>shop now</button>
        </div>
        <div className={styles.col}>
          <Image
            src={hero}
            alt="shop"
            width={200}
            height={200}
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
};

export default page;
