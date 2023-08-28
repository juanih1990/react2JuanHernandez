import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import styles from "./style.module.css"



const ItemListContainers = () => {
  const [item, setItem] = useState([])
  // const[carrito,setCarrito] = useState(0)
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

  //  const getCarrito = () => {
  //       setCarrito(carrito + 1)
  //       console.log(carrito)
  //  }


  useEffect(() => {
    getProducts()
  }, [categoria])


  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        {
          item.map(prod => (
            <Col key={prod.id} xs={12} sm={12} md={12} lg={item.length > 2 ? 3 : 5} className="m-3">
              <Card key={prod.id} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={prod.rutaImg} className="img-fluid" />
                <Card.Body>
                  <Card.Title>{prod.nombre}</Card.Title>
                  <Card.Text className="d-flex justify-content-end">
                    <span className="fw-bold">$ {prod.precio}</span>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary">AGREGAR</Button>

                    <Button variant="dark" > <Link className={`${styles['alink']}`} to={`/id/${prod.id}`}>Detalle</Link></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        }

      </Row>

    </Container>

  )

}

export default ItemListContainers