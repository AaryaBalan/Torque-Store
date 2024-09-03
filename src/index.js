import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let isCart = false
function Index() {

  //states

  let [isCart, setIsCart] = useState(true)
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
  let [totalPrice, setTotalPrice] = useState(Number(localStorage.getItem('totalPrice')) || 0)

  // setting local storage

  localStorage.setItem('cartItems', JSON.stringify(cart))
  localStorage.setItem('totalPrice', Number(totalPrice))

  // Utilises

  function addToCart(product) {
    setCart(prevProduct => {
      return [...prevProduct, product]
    })
  }

  function addPrice(price) {
    setTotalPrice(prevTotalPrice => {
      return Number(prevTotalPrice + price)
    })
  }

  // obj keys

  const propsForProduct = {
    cartProducts: cart,
    addCart: addToCart,
    addPrice: addPrice
  }

  const propsForCart = {
    handleClick: () => setIsCart(true),
    products: cart,
    setCart: setCart,
    totalPrice: totalPrice,
    setTotalPrice: setTotalPrice
  }


  //rendering elements
  return (
    <>
      <Navbar handleClick={() => setIsCart(false)} />
      {isCart &&
        <>
          <Banner />
        <Products categoryType='vehicle' all={propsForProduct} />
        <Products categoryType='laptops' all={propsForProduct} />
        <Products categoryType='smartphones' all={propsForProduct} />
        <Products categoryType='tablets' all={propsForProduct} />
        <Products categoryType='mens-shirts' all={propsForProduct} />
        <Products categoryType='mens-shoes' all={propsForProduct} />
        <Products categoryType='mens-watches' all={propsForProduct} />
        <Products categoryType='sunglasses' all={propsForProduct} />
        <Products categoryType='womens-dresses' all={propsForProduct} />
        <Products categoryType='womens-jewellery' all={propsForProduct} />
        <Products categoryType='womens-bags' all={propsForProduct} />
        <Products categoryType='womens-shoes' all={propsForProduct} />
        <Products categoryType='womens-watches' all={propsForProduct} />
        <Products categoryType='motorcycle' all={propsForProduct} />


        </>
      }

      {!isCart &&
        <>
          <Cart all={propsForCart}/>
        </>
      }
    </>
  )

}
root.render(
  <Index />
);
