import './Shop.css'
import {API_KEY, API_URL} from '../config/config'
import { useEffect, useState } from 'react'
import Preloader from '../preloader/preloader'
import ProductsList from '../productsList/ProductsList'


export default function Shop() {
    
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

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
        {loading ? <Preloader/> : <ProductsList products = {products}/>}
    </main>
}