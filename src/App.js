import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ProductImages from './components/ProductImages';
import ProductRating from './components/ProductRating';

//Theme
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.jsx';
import './App.scss';

const fetch = require('node-fetch');

const App = () => {
  const [current, setCurrent] = useState('');
  const [products, setProducts] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [productRating, setProductRating] = useState(0);

  useEffect(() => {
    const getData = () => {
      fetch('/data/mattresses.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const products = data.mattresses;
          const current = Object.keys(products)[0];
          setProducts(products);
          setCurrent(current);
          setProductRating(products[current].reviewRating);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    getData();
  }, []);

  const handleChange = event => {
    let value = event.target.value;
    setCurrent(event.target.value);
    setProductRating(products[value].reviewRating);
  };

  const handleClick = event => {
    setCartCount(cartCount + 1);
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg' className='main-container'>
        <AppBar position='fixed' className='header'>
          <Container maxWidth='lg'>
            <div className='header-content'>
              <Header cartCount={cartCount} />
            </div>
          </Container>
        </AppBar>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <ProductImages current={current} products={products} />
            <ProductRating products={products} current={current} productRating={productRating} />
          </Grid>
          <Grid item xs={12} md={5}>
            <h1>Choose Your Mattress</h1>
            <form>
              <Products products={products} current={current} handleChange={handleChange} />
              <ProductDetails products={products} current={current} />
              <Button
                data-testid='addToCart'
                variant='contained'
                type='submit'
                onClick={event => handleClick(event)}
                fullWidth
              >
                Add to Cart
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
