import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="search-product"
        placeholder="Search.."
      />
      <div className={styles.filters_container}>
        <label className={styles.select_label} htmlFor="order-by">
          Order by:
        </label>
        <select name="order-by" className={styles.select}>
          <option value="default">Default</option>
          <option value="recomended">Price</option>
          <option value="recomended">A-Z</option>
          <option value="recomended">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
