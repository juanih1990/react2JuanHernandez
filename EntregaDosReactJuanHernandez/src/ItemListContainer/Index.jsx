import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"

const ItemListContainers = () => {
  const [item, setItem] = useState([])
  const { categoria } = useParams()

  const getProducts = async () => {
    try {
      const data = await fetch('/data/data.json')  // tengo q usar la / adelante q significa q la ruta es relatica
      const products = await data.json()

      const filtro = products.filter(fil => fil.categoria === categoria)
      filtro.length > 0 ? setItem(filtro) : setItem(products)

    }
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getProducts()
  }, [categoria])


  return (
    <>
      <ItemList item={item}/>
    </>
  )

}

export default ItemListContainers