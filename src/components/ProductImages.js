import React from 'react';

export const ProductImages = props => {
  const { current, products } = props;

  return (
    <>
      {products && current && products[current].imageFileName && (
        <img
          src={`/images/${products[current].imageFileName}`}
          alt={products[current].name}
        />
      )}
    </>
  );
};

export default ProductImages;
