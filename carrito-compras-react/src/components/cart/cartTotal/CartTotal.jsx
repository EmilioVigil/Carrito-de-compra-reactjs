import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import './cartTotal.css'

export function Total() {
    const { cart } = useContext(dataContext)

    const totalCart = cart.reduce((acc, product) => acc + product.price * product.quanty, 0)

    return (
        <div className="cart-total" >
            <h3>SubTotal:</h3>
            <h4>
                {totalCart} 💲
            </h4>
        </div>
    )


}