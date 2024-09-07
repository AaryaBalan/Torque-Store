import '../styles/Search.css'
import { useEffect, useState } from 'react'
import no_search from '../images/no_search.png'
import { addToCart, onCheckout, goBack, dollorToRupee, search } from './controlers'


function Search(props) {

    let [searchProducts, setSearchProducts] = useState([])
    let [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${searchText}`)
            .then(res => res.json())
            .then(data => setSearchProducts(data.products))
    }, [searchText])



    

    return (
        <>
            <br /><br />
            <div onClick={() => goBack(props)} className="cart-go-back">Go back</div>
            <br /><br />
            <div className="search-area">
                <input type="text" className="search-input" onChange={(e) => search(e, setSearchText)} placeholder='Eg: Watch' />
            </div>


            <div className="products-area">

                {searchProducts.length ?
                    searchProducts.map(product => {
                        return (
                            <div className="product-block" key={product.id}>
                                <div className="img-block">
                                    <img className="product-img" src={product.images[0]} alt="" />
                                </div>
                                <div className="info-block">
                                    <div className="title">{product.title}</div>
                                    <div className="description">{product.description}</div>
                                    <div className="price">&#8377; {dollorToRupee(product.price)}</div>
                                </div>

                                <div className="options-block">
                                    <div className="checkout-btn" onClick={() => onCheckout(props, product.id)}>CheckOut</div>
                                    <div className="cart-btn" onClick={(e) => addToCart(props, e, product)}>Add To Cart</div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="no-search">
                        <img className='no-search-img' src={no_search} alt="" srcset="" />
                        <div className="no-search-text">No Products Found</div>
                    </div>
                }

            </div>
        </>
    )
}

export default Search