/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img // TODO: use Image next component instead
        className={styles.img}
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Product detail"
      />
      <p className={styles.title}>Product name</p>
      <p className={styles.description}>
        Your perfect pack for everyday use and walks in the forest...
      </p>
      <hr className={styles.hr} />
      <div className={styles.card_footer}>
        <p className={styles.price}>$109.54</p>
        <button className={styles.favorite_btn}>
          {/* <img
            className={styles.favorite_img}
            src="/icons/heart-outlined.svg"
            alt="Mark-as-favorite-icon"
          /> */}
          <img
            className={styles.favorite_img}
            src="/icons/heart-fullfilled.svg"
            alt="Delete-from-favorite-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
