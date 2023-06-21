import { useContext } from "react"
import { dataContext } from "../../context/DataContext"
import { CartItemCounter } from "../cartItemCounter/CartItemCounter"
import './cartElement.css'
export function CartElement() {

    const { cart, setCart } = useContext(dataContext)

    const deleteProduct = (id) => {
        const foundId = cart.find(el => el.id === id)
        const newCart = cart.filter((el) => {
            return el !== foundId
        })
        setCart(newCart)
    }

    return (
        <>
            <h1 className="cart-title">Shopping cart 🛒</h1>
            {
                cart.map(product => {
                    return (
                        <div className="cart-content" key={product.id}>
                            <img src={product.img} alt="product-card" />
                            <div className="product-details">
                                <h3 className="name">{product.name}</h3>
                                <CartItemCounter product={product} />
                                <h4 className="price">{product.price * product.quanty} $</h4>
                                <button className="cart-btn-delete" onClick={() => deleteProduct(product.id)} >❌</button>
                            </div>
                        </div>
                    )
                })

            }

        </>)
}