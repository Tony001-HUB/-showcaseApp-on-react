import '../cart/Cart.css'

function Cart(props) {
    const{count = 0} = props;

    return (
    <div className = "cart blue darken-2">
        <i className='material-icons'>shopping_cart</i>
        {count ? <span className='cart-count'> {count}</span> : null }
    </div>
    )
}

export default Cart;