import './Shop.css'
import {API_KEY, API_URL} from '../config/config'
import { useEffect, useState } from 'react'
import Preloader from '../preloader/preloader'
import ProductsList from '../productsList/ProductsList'
import Cart from '../cart/Сart'


export default function Shop() {
    
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[ordering, setOrdering] = useState([]);


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
                        count: clickItem.count++
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


    return <main className = "container content"> 
        <Cart count = {ordering.length}/>
        {loading ? <Preloader/> : <ProductsList products = {products} addToCart={addToCart}/>}
    </main>
}