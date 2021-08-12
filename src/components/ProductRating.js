import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NightsStay from '@material-ui/icons/NightsStay';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
  iconFilled: {
    color: '#402394',
  },
  icon: {
    marginRight: '10px',
  },
})(Rating);

export const ProductRating = props => {
  const { current, products, productRating } = props;

  return (
    <div className='product-rating'>
      <Typography component='legend'>
        {products && current && products[current].name} Mattress Rating
      </Typography>
      <StyledRating
        value={productRating}
        precision={0.5}
        readOnly={true}
        icon={<NightsStay fontSize='inherit' color='primary' />}
        emptyIcon={<NightsStayOutlinedIcon fontSize='inherit' />}
      />
    </div>
  );
};

ProductRating.propTypes = {
  current: PropTypes.string,
  products: PropTypes.object,
  productRating: PropTypes.number,
};

ProductRating.defaultProps = {
  current: '',
  products: {},
  productRating: 0,
};


export default ProductRating;
