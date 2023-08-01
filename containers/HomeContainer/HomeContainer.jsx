"use client";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect } from "react";
import styles from "../../app/page.module.scss";
import useDebouncer from "@/hooks/useDebouncer";
import { orderAlphabeticalTitle, orderByPrice } from "@/helpers/functions";
import { ORDER_BY, ORDER_DESC } from "@/utils/constants";
import PropTypes from "prop-types";
import { ProductTypes } from "@/types";

const HomeContainer = ({ products: serverProducts }) => {
  const [products, setProducts] = useState(serverProducts || []);
  const [allowInteraction, setAllowInteraction] = useState(false);
  const [filters, setFilters] = useState({
    searchProduct: "",
    orderBy: ORDER_BY.PRICE,
  });

  const debouncedSearchTerm = useDebouncer(filters.searchProduct, 500);

  useEffect(() => {
    setAllowInteraction(true);
  }, []);

  useEffect(() => {
    const results = serverProducts.filter((product) => {
      return product?.title
        ?.toLowerCase()
        .includes(debouncedSearchTerm?.toLowerCase());
    });
    setProducts(results);
  }, [serverProducts, debouncedSearchTerm]);

  useEffect(() => {
    if (filters.orderBy === ORDER_BY.A_TO_Z) {
      setProducts((prev) => [...orderAlphabeticalTitle(prev)]);
    }
    if (filters.orderBy === ORDER_BY.Z_TO_A) {
      setProducts((prev) => [...orderAlphabeticalTitle(prev, ORDER_DESC)]);
    }
    if (filters.orderBy === ORDER_BY.PRICE) {
      setProducts((prev) => [...orderByPrice(prev)]);
    }
  }, [serverProducts, filters.orderBy, debouncedSearchTerm]);

  const handlerOnChangeFilters = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h2 className={styles.h2} data-testid="heading">
        All products
      </h2>
      <SearchBar
        disabled={!allowInteraction}
        filters={filters}
        onChange={handlerOnChangeFilters}
      />
      <section className={styles.products_container}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  );
};

HomeContainer.propTypes = {
  products: PropTypes.arrayOf(ProductTypes).isRequired,
};

export default HomeContainer;
