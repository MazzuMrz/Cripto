import React from 'react'
import { Carousel, Container} from 'react-bootstrap'

const Inicio = () => {
    return (
        <div className="d-flex justify-content-center">
            <Carousel className="d-none d-sm-block"  fade>
  <Carousel.Item className="carusel">
    <img
      className="d-block w-100 img-responsive"
      src="https://lh5.googleusercontent.com/XCMmrezkBsAzmlhM5mYSOa8NwPRok-6N6dgTDQM3HdzMwMLUBWlN8N36W6D0dh3ZJsw5Z4XAU4EAw5oOn_tND92m7OSZ_Ovqn1V0Goh7zLkDI5XfknIpiQsDpwQaG1Gxzu_35YXe"
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="slider text-light bg-dark ">
      <h3 className="">Compra y vende con seguridad</h3>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carusel">
    <img
      className="d-block w-100 img-responsive"
      src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8xYzQ0NDRkNDIwYjkzNjZiZTAzNmMzMDgwMGY0MTI0MS5qcGVn.jpg4"
      alt="Second slide"
    />

    <Carousel.Caption>
      <div className="slider text-light bg-dark">
      <h3 className="">La billetera mas segura del mundo</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



        </div>
    )
}

export default Inicio
