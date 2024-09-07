import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';
import Search from './components/Search.js';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const categories = [
  "vehicle",
  "laptops",
  "smartphones",
  "mobile-accessories",
  "sunglasses",
  "tablets",
  "womens-dresses",
  "tops",
  "mens-shirts",
  "womens-shoes",
  "mens-shoes",
  "sports-accessories",
  "womens-watches",
  "mens-watches",
  "womens-bags",
  "womens-jewellery",
  "skin-care",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "motorcycle",
]

// let isCart = false
function Index() {

  //states

  let [isCart, setIsCart] = useState(false)
  let [isCheckout, setIsCheckout] = useState(false)
  let [isProducts, setIsProducts] = useState(true)
  let [isSearch, setIsSearch] = useState(false)


  let [recentCheckoutId, setRecentCheckoutId] = useState(0)
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

  const allProps = {
    propsForNav: {
      setIsCart: setIsCart,
      setIsProducts: setIsProducts,
      setIsCheckout: setIsCheckout,
      setIsSearch: setIsSearch
    },

    propsForProduct: {
      setIsCheckout: setIsCheckout,
      setIsProducts: setIsProducts,
      cartProducts: cart,
      addCart: addToCart,
      addPrice: addPrice,
      recentCheckoutId: setRecentCheckoutId,
      setIsSearch: setIsSearch, 
      setIsCart: setIsCart
    },

    propsForCart: {
      setIsCart: setIsCart,
      setIsProducts: setIsProducts,
      setIsCheckout: setIsCheckout,
      recentCheckoutId: setRecentCheckoutId,
      products: cart,
      setCart: setCart,
      totalPrice: totalPrice,
      setTotalPrice: setTotalPrice,
      setIsSearch: setIsSearch
    },

    propsForCheckout: {
      setIsCheckout: setIsCheckout,
      setIsProducts: setIsProducts,
      setIsCart: setIsCart,
      checkoutId: recentCheckoutId,
      cartProducts: cart,
      addCart: addToCart,
      addPrice: addPrice,
      setIsSearch: setIsSearch
    }
  }


  //rendering elements
  return (
    <>
      <Navbar all={allProps.propsForNav} />
      {
        isSearch &&
        <Search all={allProps.propsForProduct} />
      }
      {isProducts &&
        <>
          <Banner />
          {categories.map(category => {
            return <Products categoryType={category} all={allProps.propsForProduct} />
          })}
        </>
      }

      {isCart &&
        <>
          <Cart all={allProps.propsForCart} />
        </>
      }

      {
        isCheckout &&
        <>
          <Checkout all={allProps.propsForCheckout} />
        </>
      }

    </>
  )

}
root.render(
  <Index />
);
