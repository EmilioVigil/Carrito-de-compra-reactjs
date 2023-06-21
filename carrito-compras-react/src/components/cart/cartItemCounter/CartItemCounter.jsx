import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import './cartItemCounter.css'

export function CartItemCounter({ product }) {

    const { cart, setCart, buyProducts } = useContext(dataContext)

    const decrese = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)

        if (product.quanty > 1) {
            setCart(cart.map(item => item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item))
        }
    }

    return (
        <>
            <button className="counter-btn" onClick={() => decrese(product)} >-</button>
            <p>
                {product.quanty}
            </p>
            <button className="counter-btn" onClick={() => buyProducts(product)} >+</button>
        </>
    )
}