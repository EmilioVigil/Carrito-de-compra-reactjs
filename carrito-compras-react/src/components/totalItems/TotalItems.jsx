import { useContext } from "react"
import { dataContext } from "../context/DataContext"

export function TotalItems() {

    const { cart } = useContext(dataContext)
    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0)
    return <span className="cart-items-total" >{itemsQuanty}</span>

}