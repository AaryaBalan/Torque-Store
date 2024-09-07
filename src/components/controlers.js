function dollorToRupee(price) {
    return Math.round(price * 83.92).toFixed(2)
}

function removeCart(props, products, id, price) {
    const p = products.filter(product => product.id !== id)
    props.all.setCart(p)
    props.all.setTotalPrice(prevTotalPrice => prevTotalPrice - price)
}

function goBack(props) {
    props.all.setIsCart(false)
    props.all.setIsProducts(true)
    props.all.setIsCheckout(false)
    props.all.setIsSearch(false)
}

function onCheckout(props, id) {
    props.all.setIsCart(false)
    props.all.setIsProducts(false)
    props.all.setIsCheckout(true)
    props.all.recentCheckoutId(id)
    props.all.setIsSearch(false)
}

function addToCart(props, e, product) {
    const a = props.all.cartProducts.every(cartProduct => product.id !== cartProduct.id)
    if (a) {
        e.target.textContent = 'Done'
        setInterval(() => {
            e.target.textContent = 'Add To Cart'
        }, 1300)
        props.all.addCart(product)
        props.all.addPrice(Number(dollorToRupee(product.price)))
    }
    else {
        e.target.textContent = 'Added'
        setInterval(() => {
            e.target.textContent = 'Add To Cart'
        }, 1300)
    }
}

function goToCart(props) {
    props.all.setIsCart(true)
    props.all.setIsProducts(false)
    props.all.setIsCheckout(false)
    props.all.setIsSearch(false)
}

function goToSearch(props) {
    props.all.setIsCart(false)
    props.all.setIsProducts(false)
    props.all.setIsCheckout(false)
    props.all.setIsSearch(true)
}

function search(e, setSearchText) {
    setSearchText(e.target.value)
}

export { removeCart, goBack, addToCart, onCheckout, goToCart, goToSearch, dollorToRupee, search }