import BasketItem from '../basketItem/BasketItem'
import './BasketList.css'

function BasketList(props) {
    const {ordering = [], handleShowCart, deleteToCart, incrCountProduct, decrCountProduct} = props;

    const totalPrice = ordering.reduce((sum, item) => {
        return sum + item.price * item.count
    }, 0)

    return  <ul className="collection basket-list">
    <li className="collection-item active">Корзина</li>
    {   
        ordering.length ? ordering.map(item => (
            <BasketItem key={item.id} {...item} deleteToCart={deleteToCart} incrCountProduct={incrCountProduct} decrCountProduct={decrCountProduct}/>
        )) : <li className="collection-item">Корзина пуста</li>
    }
    <li className="collection-item active">Общая стоимость: {totalPrice} $</li>
    <button className="collection-item button-close" onClick={handleShowCart}>Закрыть</button>
  </ul>
}

export default BasketList;