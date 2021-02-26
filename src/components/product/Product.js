import './Product.css'

function Product(state){
    const{
        id,
        name,
        description,
        price,
        full_background,
        addToCart
    } = state;

    return(
          <div className="card movies" id = {id}>
            <div className="card-image">
              <img src={full_background}/>
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
              <p>{description}</p>
              <br/>
              <p>{`Цена: ${price} $`}</p>
            </div>
            <button onClick={() => addToCart({
              id,
              name,
              price
            })} className="waves-effect waves-light btn">Купить</button>
          </div>
    )
}

export default Product;