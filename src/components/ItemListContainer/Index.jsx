import { useEffect, useState } from "react"
import ItemList from "../ItemList"
import { db } from "../firebase/client"
import { getDocs, collection } from "firebase/firestore"
const ItemListContainers = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
      const dataAll = async () => {
        const productsRef = collection(db, "products")
        const data = await getDocs(productsRef)
        const dataAll = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setProductos(dataAll)
      }
      dataAll()
  }, [])


  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}
export default ItemListContainers