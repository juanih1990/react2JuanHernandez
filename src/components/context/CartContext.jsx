import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { db } from "../firebase/client"
import { getDocs, collection, query, where, limit, getDoc, doc, addDoc } from "firebase/firestore"

export const CartContext  = createContext()

const CartProvider  = ({ children }) => {
    const [item, setItem] = useState([])
    const [carrito, setCarrito] = useState(0)
    const [category, setCategory] = useState("")
    const [ID, setID] = useState("")
    const [compra, setCompra] = useState([])
    const [ordenDeCompra, setOrdenCompra] = useState({buyer: {} , items:[] , total: 0})
    const [precioTotal, setTotal] = useState(0)
    const [user, setUser] = useState({})

    const cargarDatos = () => {
        const dataAll = async () => {
            const productsRef = collection(db, "products")
            const data = await getDocs(productsRef)
            const dataAll = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setItem(dataAll)
        }
        dataAll()
    }

    const datosOrdenCompra = () => {
        const dataAllDetailCompra = async () => {
            const orderDetail= collection(db, "order")
            const data = await getDocs(orderDetail)
            const dataAllDetail = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dataAllDetail.length > 0  ? setMostrarOrden(dataAllDetail) : setMostrarOrden({buyer: {} , items:[] , total: 0})
            
        }
        dataAllDetailCompra()
    }

    useEffect(() => {
        const productFilter = query(
            collection(db, "products"),
            where("category", "==", `${category}`),
        )
        const dataFilter = async () => {
            const data = await getDocs(productFilter)
            const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dataFilter.length > 0 ? setItem(dataFilter) : cargarDatos()
        }
        dataFilter()
    }, [category])

    useEffect(() => {
        const productFilterIDdetail = query(
            collection(db, "products"),
            where("categoryid", "==", `${ID}`)
        )
        const dataFilterIDdetail = async () => {
            const data = await getDocs(productFilterIDdetail)
            const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dataFilter.length > 0 ? setItem(dataFilter) : cargarDatos()
        }
        dataFilterIDdetail()
    }, [ID])

    const getCarrito = (cont, operacion) => {
        if (operacion) {
            cont > 0 ? setCarrito(carrito + cont) : setCarrito(carrito + 1)
        }
        else {
            setCarrito(carrito - cont)
        }
    }

    const clearCarrito = () => {
        setCarrito(0)
        setCompra([])
        setTotal(0)
    }

    const getCompra = (buy, cant) => {
        let filter = compra.findIndex(ele => ele.categoryid == buy.categoryid)
        if (filter == -1) {
            const objetoConCantidad = { ...buy, cantidad: cant };
            setCompra([...compra, objetoConCantidad]) 
        }
        else {
            const compraActualizada = [...compra];
            compraActualizada[filter].cantidad += cant;
            setCompra(compraActualizada);
        }
        
    }
    
    const quitarCompra = (id) => {
        const filtrarCarro = compra.filter(quitar => quitar.categoryid != id)
        setCompra(filtrarCarro)
    }

    const createOrder = () => {
        const order = {
            buyer: user,
            items: compra,
            total: precioTotal
        }
        setOrdenCompra(order)
    }

     const setUsers = (usuario) => {
         setUser(usuario)
     }

    const finalizarCompra = () => {
        createOrder()
        const orderCollection = collection(db, 'order')
        addDoc(orderCollection, ordenDeCompra).then(({ id }) => console.log(id))
    }

    return (
        <CartContext.Provider value={{ item, setItem, category, carrito, setCarrito, clearCarrito, getCarrito, setCategory, setID, ID, getCompra, compra, createOrder, finalizarCompra, setTotal, precioTotal, setUsers, quitarCompra ,ordenDeCompra, datosOrdenCompra}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider  //mi provaider