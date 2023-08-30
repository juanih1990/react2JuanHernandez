/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail({ detail }, {contador}) {
  return (
    <div className="d-flex justify-content-center ">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={detail[0].rutaImg} className="img-fluid" />
        <Card.Body>
          <Card.Title>{detail[0].nombre}</Card.Title>
          <div>
            <hr />
            <div className="d-flex justify-content-between"><h6>Marca: {detail[0].marca}</h6>
              <span className="fw-bold">{detail[0].precio} </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <ItemCount/>
            <div>
              <Button variant="primary">AGREGAR</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
