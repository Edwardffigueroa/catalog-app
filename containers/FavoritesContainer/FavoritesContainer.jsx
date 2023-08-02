"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavoritesContainer.module.scss";
import LoadingFallback from "@/components/LoadingFallback";
import ProductsView from "@/components/ProductsView";

const FavoritesContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <h2 className={styles.h2} data-testid="heading">
            Favorites
          </h2>
          <ProductsView />
        </>
      ) : (
        <LoadingFallback />
      )}
    </>
  );
};

export default FavoritesContainer;
