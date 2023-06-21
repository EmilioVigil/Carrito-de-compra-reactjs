import { createContext, useState, useEffect } from "react";
import axios from 'axios'
export const dataContext = createContext();


export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios('mock.json').then(res => {
            setData(res.data.books)
        })
    }, [])

    const buyProducts = (product) => {

        // Detecto si ya existe el producto dentro del carrito
        const productRepeat = cart.find((item) => item.id === product.id)

        if (productRepeat) {
            setCart(cart.map(item => item.id === product.id ? { ...product, quanty: productRepeat.quanty + 1 } : item))
        } else {
            setCart([...cart, product])
        }

    }


    return (
        // Informacion que yo voy a compartir por toda mi app
        <dataContext.Provider value={{ data, cart, setCart, buyProducts }} >
            {
                children
            }
        </dataContext.Provider>
    )
}