import Product from '../product/Product'

function ProductsList({products = []}){

    if(!products.length){
        return(
            <h1>The server returned an empty data array</h1>
        )
    }

    return(
        <div>
            {products.map((product) => (
                <Product key={product.id} {...product}/>
            ))}
        </div>
    )
}

export default ProductsList;