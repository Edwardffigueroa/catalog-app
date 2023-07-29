import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <Image
        style={{ borderRadius: "5px" }}
        width={150}
        height={150}
        unoptimized
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Product detail"
      />
      <p className={styles.title}>Product name</p>
      <p className={styles.description}>
        Your perfect pack for everyday use and walks in the forest...
      </p>
      <hr className={styles.hr} />
      <p className={styles.price}>$109.54</p>
    </div>
  );
};

export default ProductCard;
