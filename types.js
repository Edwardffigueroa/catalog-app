import PropTypes from "prop-types";

export const ProductTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});
