import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetch('/data/data.json')  // tengo q usar la / adelante q significa q la ruta es relatica
                const products = await data.json()

                const filtro = products.filter(fil => fil.id == Number(id))
                setDetail(filtro)
            }
            catch (e) {
                console.error(e);
            }
        }
        getProducts()

    }, [id])

    return (
        <>
            {detail.length > 0 ? (
                <ItemDetail detail= {detail}/>  
            ) : (
                <p>No se encontró ningún detalle para el ID proporcionado.</p>
            )}
        </>
    )
}

export default ItemDetailContainer