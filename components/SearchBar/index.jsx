import React from "react";
import styles from "./SearchBar.module.scss";
import PropTypes from "prop-types";
import { ORDER_BY } from "@/utils/constants";

const SearchBar = ({ filters, onChange, disabled }) => {
  return (
    <div>
      <input
        className={styles.input}
        disabled={disabled}
        type="text"
        value={filters.searchProduct}
        onChange={onChange}
        name="searchProduct"
        placeholder="Type your product..."
        data-testid="search-bar"
      />
      <div className={styles.filters_container}>
        <label className={styles.select_label} htmlFor="orderBy">
          Order by:
        </label>
        <select
          disabled={disabled}
          value={filters.orderBy}
          onChange={onChange}
          name="orderBy"
          className={styles.select}
        >
          <option value={ORDER_BY.PRICE}>Lower Price</option>
          <option value={ORDER_BY.A_TO_Z}>A-Z</option>
          <option value={ORDER_BY.Z_TO_A}>Z-A</option>
        </select>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  filters: PropTypes.shape({
    searchProduct: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SearchBar;
