import React from 'react'
import { CartContext } from "../context/CartContext";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import styles from "./style.module.css"
const Cart = () => {
    const estadoContext = useContext(CartContext)
    return (
        <div className={`${styles['Carrito']} d-flex justify-content-end align-items-center Carrito mt-5 `}   >
            <Link className={`${styles['Link']} m-2`} to="/carrito" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            </Link>
            <div className="d-flex justify-content-center align-items-center m-3">
                {<span> {estadoContext.carrito}</span>}
            </div>
            <Button variant="secondary" onClick={estadoContext.clearCarrito}>VACIAR CARRITO</Button>
        </div>
    )
}
export default Cart
