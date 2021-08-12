import React from 'react';
import PropTypes from 'prop-types';

export const ProductDetails = props => {
  const { current, products } = props;

  return (
    <div className='product-details'>
      {products && current && products[current].name} Mattress
      <span className='price'>
        ${products && current && products[current].price}
      </span>
    </div>
  );
};

ProductDetails.propTypes = {
  current: PropTypes.string,
  products: PropTypes.object,
};

ProductDetails.defaultProps = {
  current: '',
  products: {},
};

export default ProductDetails;
