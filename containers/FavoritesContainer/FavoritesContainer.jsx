"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavoritesContainer.module.scss";
import ProductCard from "@/components/ProductCard";
import useLocalStorage from "@/hooks/useLocalStorage";

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(favorites);

  const handleOnAddFavorites = (obj) => {
    setFavorites([...favorites, obj]);
  };

  const handleOnDeleteFavorites = (obj) => {
    setFavorites(favorites.filter((fav) => fav.id !== obj.id));
  };

  return (
    <>
      {!loading ? (
        <>
          <h2 className={styles.h2} data-testid="heading">
            Favorites
          </h2>
          <section className={styles.products_container}>
            {favorites?.length > 0 &&
              favorites?.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  handleOnAddFavorites={handleOnAddFavorites}
                  handleOnDeleteFavorites={handleOnDeleteFavorites}
                  isFavorite={favorites.some((fav) => fav.id === product.id)}
                />
              ))}
          </section>
        </>
      ) : (
        <p>Load</p>
      )}
    </>
  );
};

export default FavoritesContainer;
