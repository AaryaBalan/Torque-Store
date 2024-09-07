import '../styles/Checkout.css'
import { useEffect, useState } from 'react'
import visa from '../images/visa.png'
import google_pay from '../images/google_pay.png'
import phonepay from '../images/phonepay.webp'
import paytm from '../images/paytm.jpg'
import star from '../images/star.jpg'
import { addToCart , goBack, dollorToRupee} from './controlers'


function Checkout(props) {

    // defining state

    let [checkoutProduct, setCheckoutProduct] = useState([])
    let [quantity, setQuantity] = useState(1)
    let [price, setPrice] = useState(0)

    //fetching
    useEffect(() => {
        try {
            fetch(`https://dummyjson.com/products/${props.all.checkoutId}`)
                .then(res => res.json())
                .then(data => setCheckoutProduct(data))
                setPrice(dollorToRupee(checkoutProduct.price))
        } catch (error) {
            console.log(error)
        }
    }, [props.all.checkoutId, checkoutProduct.id, checkoutProduct.price])


    return (
        <div className="checkout-page">
            <div className="top-options">
                <div className="checkout-goback" onClick={() => goBack(props)}>Go Back</div>
                <div className="checkout-cart" onClick={(e) => addToCart(props, e, checkoutProduct)}>Add To Cart</div>
            </div>

            <div className="top-page">
                <div className="left-portion">
                    <div className="img-block">
                        <img className="checkout-img" src={checkoutProduct.images ? checkoutProduct.images[0] : ''} alt="" />
                    </div>
                    <div className="basic-info-block">
                        <div className="checkout-title">{checkoutProduct.title}</div>
                        <div className="checkout-tag">{checkoutProduct.category}</div>
                        <div className="rating-area">
                            <img className='star-img' src={star} alt="" />
                            <div className="checkout-ratings">{checkoutProduct.rating}</div>
                        </div>
                    </div>
                </div>

                <div className="right-portion">
                    <div className="right-portion-info">
                        <div className="checkout-brand">Brand: <span>{checkoutProduct.brand ? checkoutProduct.brand : 'Torque'}</span></div>
                        <div className="checkout-model">Model: <span>{checkoutProduct.title}</span></div>
                        <div className="checkout-description">Description: <span>{checkoutProduct.description}</span></div>
                        <div className="rating-area">
                            <div className="rate">Rating: </div>
                            <img className='star-img' src={star} alt="" />
                            <div className="checkout-rating"><span>{checkoutProduct.rating}</span></div>
                        </div>
                        <div className="checkout-price">Price: <span>&#8377; {dollorToRupee(checkoutProduct.price)}</span></div>
                        <div className="checkout-stocks">Remaining Stocks: <span>{checkoutProduct.stock}</span></div>
                        <div className="checkout-weight">Weight: <span>{checkoutProduct.weight} Units</span></div>
                    </div>
                    <div className="warranty-info">
                        <div className="checkout-warranty">Warranty information</div>
                        <div className="checkout-warranty-info">Warranty Information: <span>{checkoutProduct.warrantyInformation}</span></div>
                        <div className="checkout-shipping-info">Shipping Information: <span>{checkoutProduct.shippingInformation}</span></div>
                        <div className="checkout-availability-info">Availability Status: <span>{checkoutProduct.availabilityStatus}</span></div>
                        <div className="checkout-return-info">Return Policy: <span>{checkoutProduct.returnPolicy}</span></div>
                    </div>
                </div>

            </div>


            <div className="review-head">Reviews</div>

            <div className="review-main-block">
                {checkoutProduct.reviews &&
                    checkoutProduct.reviews.map(review => {
                        return (
                            <div className="reviews-block">
                                <div className="review-top-block">
                                    <div className="user-info">
                                        <div className="profile-img">{review.reviewerName[0]}</div>
                                        <div className="review-name">{review.reviewerName}</div>
                                    </div>
                                    <div className="time-info">{review.date}</div>
                                </div>
                                <div className="review-email">{review.email}</div>
                                <div className="review-bottom-block">
                                    <div className="star-review-area">
                                        <img className='star-img' src={star} alt="" />
                                        <div className="review-star">{review.rating}</div>
                                    </div>
                                    <div className="review-comment">{review.comment}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="cart-detail-block">
                <div className="quantity-block">
                    <div className="total-produts-block">No Of Quantity: {quantity}</div>
                    <div className="quantity-btns">
                        <button className="decrease" onClick={() => setQuantity(prev => prev -1 || 1)}>-</button>
                        <button className='increase' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>
                </div>
                <div className="total-money-block">Total Price: &#8377; {quantity*price}</div>
                <div className="checkout-block">Buy Now</div>
                <div className="pay-using">Pay Using:</div>
                <div className="payment-platform">
                    <img src={visa} alt="" className="payment-logo" />
                    <img src={paytm} alt="" className="payment-logo" />
                    <img src={google_pay} alt="" className="payment-logo" />
                    <img src={phonepay} alt="" className="payment-logo" />
                </div>
            </div>
        </div>
    )
}

export default Checkout