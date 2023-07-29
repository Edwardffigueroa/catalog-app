import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form>
      <input
        className={styles.input}
        type="text"
        name="search-product"
        placeholder="Search.."
      />
      <div>
        <select className={styles.input} id="standard-select">
          <option value="Option 1">Option 1</option>
        </select>
        <span class="focus"></span>
      </div>
    </form>
  );
};

export default SearchBar;
