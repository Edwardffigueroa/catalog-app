import React from "react";
import PropTypes from "prop-types";

import styles from "./ErrorFallback.module.scss";

const ErrorFallback = ({ onClick }) => {
  return (
    <div className={styles.error_container}>
      <h2 className={styles.h2}>{`Something went wrong! =(`}</h2>
      <button className={styles.btn} onClick={onClick}>
        Try again
      </button>
    </div>
  );
};

ErrorFallback.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ErrorFallback;
