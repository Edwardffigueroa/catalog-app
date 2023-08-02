/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./ProductCard.module.scss";
import { ProductTypes } from "@/types";
import Image from "next/image";

const ProductCard = ({
  id,
  title,
  price,
  description,
  image,
  isFavorite,
  handleOnAddFavorites,
  handleOnDeleteFavorites,
  toggleLayout,
}) => {
  const handleOnClick = () => {
    const obj = {
      id,
      title,
      price,
      description,
      image,
      isFavorite,
    };

    if (isFavorite) {
      handleOnDeleteFavorites(obj);
      return;
    }
    handleOnAddFavorites(obj);
  };

  return (
    <div className={`${toggleLayout ? styles.card : styles.card2}`}>
      <div className={styles.img_container}>
        <img // TODO: use Image next component instead
          className={styles.img}
          src={image}
          alt="product-detail"
        />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <hr className={styles.hr} />
      <div className={styles.card_footer}>
        <p className={styles.price}>${price}</p>

        {isFavorite ? (
          <button onClick={handleOnClick} className={styles.favorite_btn}>
            <Image
              height={30}
              width={30}
              className={styles.favorite_img}
              src="/icons/heart-fullfilled.svg"
              alt="Delete-from-favorite-icon"
            />
          </button>
        ) : (
          <button onClick={handleOnClick} className={styles.favorite_btn}>
            <Image
              height={30}
              width={30}
              className={styles.favorite_img}
              src="/icons/heart-outlined.svg"
              alt="Mark-as-favorite-icon"
            />
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = ProductTypes.isRequired;

export default ProductCard;
