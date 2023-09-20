/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { ShopContext } from "../context/shopContext"
import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function ItemDetail() {
  const shopContextDetail = useContext(ShopContext)
  const { id } = useParams()
  useEffect(() => {
    shopContextDetail.setID(id)
  }, [id])

  return (
    shopContextDetail.item[0]?.categoryid !== id ? (
      <div>Cargando...</div>
    ) : (
      <div className="d-flex justify-content-center ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={shopContextDetail.item[0]?.image} className="img-fluid" />
          <Card.Body>
            <Card.Title>{shopContextDetail.item[0]?.title}</Card.Title>
            <div>
              <hr />
              <div className="d-flex justify-content-between"><h6>Marca:{shopContextDetail.item[0]?.description}</h6>
                <span className="fw-bold">{shopContextDetail.item[0]?.price} </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <ItemCount item={shopContextDetail.item} />
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
}
