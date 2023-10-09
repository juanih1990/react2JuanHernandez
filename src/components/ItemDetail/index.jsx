/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function ItemDetail() {
  const CartContextDetail = useContext(CartContext)
  const { id } = useParams()
  useEffect(() => {
    CartContextDetail.setID(id)
  }, [id])

  return (
    CartContextDetail.item[0]?.categoryid !== id ? (
      <div>Cargando...</div>
    ) : (
      <div className="d-flex justify-content-center ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CartContextDetail.item[0]?.image} className="img-fluid" />
          <Card.Body>
            <Card.Title>{CartContextDetail.item[0]?.title}</Card.Title>
            <div>
              <hr />
              <div className="d-flex justify-content-between"><h6>Marca:{CartContextDetail.item[0]?.description}</h6>
                <span className="fw-bold">{CartContextDetail.item[0]?.price} </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <ItemCount item={CartContextDetail.item} />
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
}
