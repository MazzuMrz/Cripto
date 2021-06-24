import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import data from "./monedero.json";

class Tablaofertas extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Moneda: "",
      precio: "",
      descripcion: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  editar = (dato) => {
    let contador = 0;
    let arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].Moneda = dato.Moneda;
        arreglo[contador].Cantidad = dato.Cantidad;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
      <div className="text-center">
      <h1 className="bg-dark text-warning">Mi billetera</h1>
      </div>
        <Container className="text-center">
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Moneda</th>
                <th className="d-none d-lg-block">Cantidad</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Moneda}</td>
                  <td className="d-none d-lg-block">{dato.Cantidad}</td>

                  <td>
                    <Button
                      color="warning"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Vender/Comprar
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h1>Editar Registro</h1>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Moneda</label>
              <input
                className="form-control"
                name="Moneda"
                readOnly
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Moneda}
              />
            </FormGroup>

            <FormGroup>
              <label>Cantidad</label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Cantidad}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar monedero
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Tablaofertas;
