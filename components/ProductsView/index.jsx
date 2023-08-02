import React from "react";
import ProductCard from "../ProductCard";
import styles from "./ProductsView.module.scss";
import { useLayout } from "@/providers/LayoutProvider";
import useLocalStorage from "@/hooks/useLocalStorage";

const ProductsView = ({ products }) => {
  const { toggleLayout } = useLayout();
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const productsToRender = products || favorites;

  const handleOnAddFavorites = (obj) => {
    setFavorites([...favorites, obj]);
  };

  const handleOnDeleteFavorites = (obj) => {
    setFavorites(favorites.filter((fav) => fav.id !== obj.id));
  };

  return (
    <section
      className={`${
        toggleLayout ? styles.products_container : styles.products_container2
      }`}
    >
      {productsToRender.map((product) => (
        <ProductCard
          toggleLayout={toggleLayout}
          key={product.id}
          {...product}
          handleOnAddFavorites={handleOnAddFavorites}
          handleOnDeleteFavorites={handleOnDeleteFavorites}
          isFavorite={favorites.some((fav) => fav.id === product.id)}
        />
      ))}
    </section>
  );
};

export default ProductsView;
