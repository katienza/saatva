import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

export const Products = props => {
  const { current, products, handleChange } = props;

  return (
    <FormControl className='product-container'>
      <FormLabel component='legend'>Select Mattress Type</FormLabel>
      <RadioGroup
        name='product'
        value={current ? current : ''}
        onChange={(event) => handleChange(event)}
        className='radio-group'
      >
        {products &&
          Object.keys(products).map(product => {
            return (
              <FormControlLabel
                className={`form-radio ${product === current ? 'is-selected' : ''}`}
                key={product}
                value={product}
                control={<Radio className='radio-button' />}
                label={products[product].name}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};

Products.propTypes = {
  current: PropTypes.string,
  products: PropTypes.object,
};

Products.defaultProps = {
  current: '',
  products: {},
};

export default Products;
