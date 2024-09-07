import { useEffect, useState } from "react";
import '../styles/Products.css'
import { onCheckout, addToCart, dollorToRupee } from "./controlers";


function Products(props) {
    const [fakeProduts, setFakeProducts] = useState([])

    useEffect(() => {
        try {
            fetch(`https://dummyjson.com/products/category/${props.categoryType}`)
                .then(res => res.json())
                .then(data => setFakeProducts(data.products))
        } catch (err) {
            console.error(err)
        }
    }, [props.categoryType])

    return (
        <center>
            <div className="category-head">{props.categoryType.toUpperCase()}</div>
            <div className="category-block">
                {
                    fakeProduts.map(product => {
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
                }
            </div>
        </center>
    )
}

export default Products