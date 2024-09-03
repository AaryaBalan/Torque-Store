import '../styles/Cart.css'
import visa from '../images/visa.png'
import google_pay from '../images/google_pay.png'
import phonepay from '../images/phonepay.webp'
import paytm from '../images/paytm.jpg'

function dollorToRupee(price) {
    return Math.round(price * 83.92).toFixed(2)
}

function Cart(props) {
    console.log(props.all.products.length)

    function removeCart(products, id, price) {
        const p = products.filter(product => product.id !== id)
        props.all.setCart(p)
        props.all.setTotalPrice(prevTotalPrice => prevTotalPrice - price)
    }

    return (
        <>
            <br /><br />
            <div onClick={props.all.handleClick} className="cart-go-back">Go back</div>
            <br /><br />
            <div className="cart-main-block">
                <div className="cart-cart-block">

                    {/* if cart is empty */}
                    {!props.all.products.length && <h1>no cart</h1>}

                    {/* if cart is non empty */}
                    {props.all.products.map(product => {
                        return (
                            <div className="cart-product-block" key={product.id}>
                                <div className="cart-img-block">
                                    <img className="cart-product-img" src={product.images[0]} alt="" />
                                </div>
                                <div className="cart-info-block">
                                    <div className="cart-title">{product.title}</div>
                                    <div className="cart-description">{product.description}</div>
                                    <div className="cart-price">&#8377; {dollorToRupee(product.price)}</div>
                                </div>

                                <div className="cart-options-block">
                                    <div className="cart-buynow-btn">Buy Now</div>
                                    <div className="cart-remove-btn" onClick={() => removeCart(props.all.products, product.id, dollorToRupee(product.price))}>Remove</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-detail-block">
                    <div className="total-produts-block">Total Products in Cart: {props.all.products.length}</div>
                    <div className="total-money-block">Total Price: &#8377; {props.all.totalPrice}</div>
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
        </>
    )
}

export default Cart