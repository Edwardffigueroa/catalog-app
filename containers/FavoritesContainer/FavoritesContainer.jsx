"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavoritesContainer.module.scss";
import ProductCard from "@/components/ProductCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import LoadingFallback from "@/components/LoadingFallback";
import { useLayout } from "@/providers/LayoutProvider";
import ProductsView from "@/components/ProductsView";

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [loading, setLoading] = useState(true);
  const { toggleLayout } = useLayout();

  useEffect(() => {
    setLoading(false);
  }, []);

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
          <ProductsView products={favorites} />
        </>
      ) : (
        <LoadingFallback />
      )}
    </>
  );
};

export default FavoritesContainer;
