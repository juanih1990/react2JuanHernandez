/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { useEffect ,useState } from "react"
import { useParams } from 'react-router-dom'
import { db } from "../firebase/client"
import { getDocs, collection, query, where } from "firebase/firestore"

export default function ItemDetail() {
  const CartContextDetail = useContext(CartContext)
  const { id } = useParams()
  const [items, setItems] = useState([]);
  useEffect(() => {
    const productFilterIDdetail = query(
      collection(db, "products"),
      where("categoryid", "==", `${id}`)
    )
    const dataFilterIDdetail = async () => {
      const data = await getDocs(productFilterIDdetail)
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      dataFilter.length > 0 && setItems(dataFilter) 
    }
    dataFilterIDdetail()
  }, [id])

  return (
    items[0]?.categoryid !== id ? (
      <div>Cargando...</div>
    ) : (
      <div className="d-flex justify-content-center ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={items[0]?.image} className="img-fluid" />
          <Card.Body>
            <Card.Title>{items[0]?.title}</Card.Title>
            <div>
              <hr />
              <div className="d-flex justify-content-between"><h6>Marca:{items[0]?.description}</h6>
                <span className="fw-bold">{items[0]?.price} </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <ItemCount item={items} />
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
}
