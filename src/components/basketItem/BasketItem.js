import './BasketItem.css'

function BasketItem(props) {
    const {
        id,
        name,
        price,
        count,
        deleteToCart,
        incrCountProduct,
        decrCountProduct
    } = props;
    return <li className="collection-item">
        {name} <button onClick={() => incrCountProduct(id)}>+</button>x{count}<button onClick={() => decrCountProduct(id)}>-</button> = {price*count} $
        <span className="secondary-content">
        <i className="material-icons button-delete" onClick={() => deleteToCart(id)}>cancel</i>
        </span>
        </li>
}

export default BasketItem;