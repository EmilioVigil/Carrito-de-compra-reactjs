import { useContext } from "react"
import { dataContext } from "../context/DataContext"
import './products.css'


export function Products() {

    const { data, buyProducts } = useContext(dataContext)

    return data.map((product) => {
        return (
            <div className="card card-container" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <button onClick={() => buyProducts(product)} >Add to cart</button>
            </div>
        )
    })


}