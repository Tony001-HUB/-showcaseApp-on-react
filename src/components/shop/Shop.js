import './Shop.css'
import {API_KEY, API_URL} from '../config/config'
import { useEffect, useState } from 'react'
import Preloader from '../preloader/preloader'
import ProductsList from '../productsList/ProductsList'
import Cart from '../cart/Сart'
import BasketList from '../basketList/BasketList'


export default function Shop() {
    
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[ordering, setOrdering] = useState([]);
    const[cartIsShow, setCartIsShow] = useState(false);

    
    const incrCountProduct = (id) => {
        const newOrdering = ordering.map((item) => {
            if(id === item.id){
                const newCount = item.count + 1;
                return{
                    ...item,
                    count: newCount
                }
            } else {
                return item;
            } 
        })
        setOrdering(newOrdering);
    }

    const decrCountProduct = (id) => {
        const newOrdering = ordering.map((item) => {
            if(id === item.id && item.count > 1){
                const newCount = item.count - 1;
                return{
                    ...item,
                    count: newCount
                }
            } else {
                return item;
            } 
        })
        setOrdering(newOrdering);
    }

    const handleShowCart = () => {
        setCartIsShow(!cartIsShow);
        console.log(cartIsShow)
    }

    const deleteToCart = (id) => {
        const itemIndex = ordering.filter(deleteItem => deleteItem.id !== id);
        setOrdering(itemIndex);
    }

    const addToCart = (item) => {
        const itemIndex = ordering.findIndex(clickItem => clickItem.id === item.id);

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                count: 1
            }
            setOrdering([...ordering, newItem])
        }else {
            const newRecurringOrdering = ordering.map((clickItem, index) => {
                if(itemIndex === index){
                    return{
                        ...clickItem,
                        count: clickItem.count + 1
                    }
                }else {
                    return clickItem;
                }    

            });
            setOrdering(newRecurringOrdering);
        }
    }

    useEffect(function getProducts(){
        console.log(API_KEY  + " " +  API_URL)
        fetch(API_URL, {
            headers:{
                'Authorization': API_KEY
            }
        })
        .then(response => response.json())
        .then((data) => {
            data.featured && setProducts(data.featured);
            setLoading(false);
        })
    }, [])

    console.log(ordering);
    return <main className = "container content"> 
        <Cart count = {ordering.length} handleShowCart={handleShowCart}/>
        {loading ? (<Preloader/>) : (<ProductsList products = {products} addToCart={addToCart}/>)}
        {
            cartIsShow && <BasketList ordering={ordering} handleShowCart={handleShowCart} deleteToCart={deleteToCart} incrCountProduct={incrCountProduct} decrCountProduct={decrCountProduct}/>
        }
    </main>
}