import React from "react";
import { Container, Card, CardColumns } from "react-bootstrap";

const Today = () => {
  return (
    <div>
      <div className="text-center noticias">
        <h1 className="bg-warning ">Noticias</h1>
      </div>
     
      <Container className=" ">
        <CardColumns>
          <Card>
            <Card.Img
              variant="top"
              src="https://eleconomista.com.ar/wp-content/uploads/2021/06/XsUZgt-v_400x400.jpg"
            />
            <Card.Body>
              <Card.Title>
                El Salvador y Miami abrazan las criptos y el BCE advierte a
                quienes no emitan una CBDC
              </Card.Title>
              <Card.Text>
                osé Luis era un chico de 11 años. Fue torturado, le cortaron la
                cabeza y tiraron su cuerpo en un baldío. Todo por jugar con sus
                amigos en una zona de conflicto entre las bandas conocidas como
                “La 18” y “MS-13”. Así lo informó el diario “The Guardian” en un
                artículo escalofriante de noviembre de 2019.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Img
              variant="top"
              src="https://www.trecebits.com/wp-content/uploads/2021/02/AirDrop.jpg"
            />
            <Card.Body>
              <Card.Title>
                Países que podrían adoptar el Bitcoin como moneda tras El
                Salvador
              </Card.Title>
              <Card.Text>
                Paraguay y Panamá propondrán leyes similares a la promulgada por
                El Salvador para convertir el Bitcoin u otras criptos en monedas
                de curso legal
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Hace 2 horas</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                El BCRA y la @CNVArgentina consideran oportuno alertar sobre los
                riesgos e implicancias de los criptoactivos... <a  href="https://twitter.com/BancoCentral_AR/status/1395426680190218242?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1395426680190218242%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.telam.com.ar%2Fnotas%2F202105%2F555256-mercado-cripto-derrumbe-dos-semanas.html"
                  >Ver mas</a> 
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  <a
                    className="h5"
                    href="https://twitter.com/BancoCentral_AR/status/1395426680190218242?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1395426680190218242%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.telam.com.ar%2Fnotas%2F202105%2F555256-mercado-cripto-derrumbe-dos-semanas.html"
                  >
                    BCRA via Twitter
                  </a>
                  
                </small>
              </footer>
              
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Img src="https://media.ambito.com/p/92c907c7b1fe6cd7e8b0158cd3ecbe15/adjuntos/239/imagenes/038/995/0038995716/por-el-momento-el-servicio-no-esta-habilitado-america-latina.jpg" />
            <Card.Body>
              <Card.Title>
                Coinbase llegó a Google Pay y Apple Pay para permitir pagar con
                criptos desde el teléfono
              </Card.Title>
              <Card.Text>
                El acuerdo supone un nuevo impulso para las criptomonedas. Se
                espera que con el correr de los meses, el servicio sea
                habilitado en aquellos países donde funciona la tarjeta Coinbase
                Card.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Hace 30 minutos</small>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </CardColumns>
      </Container>
    </div>
  );
};

export default Today;
