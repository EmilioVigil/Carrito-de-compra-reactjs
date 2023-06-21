import { NavBar } from "../navbar/Navbar"
import { Banner } from "../banner/Banner"
import { Products } from "../products/Products"
export function Home() {


    return (
        <>
            <NavBar />
            <Banner />
            <div className="product-card-container">
                <Products />
            </div>
        </>
    )


}