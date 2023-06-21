import { useContext } from 'react';
import { dataContext } from '../context/DataContext';
import { Link } from 'react-router-dom'
import { CartElement } from './cartElement/CartElement';
import { Total } from './cartTotal/CartTotal';
import './cart.css'

export function Cart() {

    const { cart } = useContext(dataContext)

    return cart.length ? (
        <>
            <CartElement />
            <Total />
            <Link to='/' >Volver a home</Link>
        </>
    ) : (
        <>
            <p className='cart-empty' >Empty cart</p>
            <Link to='/' >Volver a home</Link>
        </>
    )
}