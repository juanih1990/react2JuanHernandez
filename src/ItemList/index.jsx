import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const itemList = ({ item }) => {
    const [carrito, setCarrito] = useState(0)
    const getCarrito = () => {
        setCarrito(carrito + 1)
    }
    const clearCarrito = () => {
        setCarrito(0)
    }
    return (
        <>
            <div className={`${styles['Carrito']} d-flex justify-content-end align-items-center Carrito mt-5 `}   >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <div className="d-flex justify-content-center align-items-center m-3">
                    <span className="imgCarrito"> {carrito}</span>
                </div>
                <Button variant="danger" onClick={clearCarrito}>VACIAR CARRITO</Button>
            </div>
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
                                            <Button variant="primary" onClick={getCarrito}>AGREGAR</Button>
                                            <Button variant="dark" > <Link className={`${styles['alink']}`} to={`/id/${prod.id}`}>Detalle</Link></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default itemList