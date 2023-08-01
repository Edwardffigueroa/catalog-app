/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./ProductCard.module.scss";
import PropTypes from "prop-types";

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div className={styles.card}>
      <img // TODO: use Image next component instead
        className={styles.img}
        src={image}
        alt="product-detail"
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <hr className={styles.hr} />
      <div className={styles.card_footer}>
        <p className={styles.price}>${price}</p>
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

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
