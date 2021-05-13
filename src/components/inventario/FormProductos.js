import { Component } from "react";
import CustomInput from "../assets/CustomInput";
const { ipcRenderer } = require("electron");

class FormProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreProducto: "",
      cantidadProducto: null,
      precioProducto: null,
    };
    this.nombreBinder = this.nombreBinder.bind(this);
    this.cantidadBinder = this.cantidadBinder.bind(this);
    this.precioBinder = this.precioBinder.bind(this);
  }
  SubmitProducto() {
    ipcRenderer.send("addProducto", {
      type:'Productos',
      nombreProducto: this.state.nombreProducto,
      cantidadProducto: this.state.cantidadProducto,
      precioProducto: this.state.precioProducto,
    });
  }
  nombreBinder(event) {
    this.setState({ nombreProducto: event.target.value });
  }
  cantidadBinder(event) {
    this.setState({ cantidadProducto: event.target.value });
  }
  precioBinder(event) {
    this.setState({ precioProducto: event.target.value });
  }
  render() {
    return (
      <div className="formProductos p-3">
        <h3>Agregar Nuevo Producto</h3>
        <hr />
        <form action="">
          <CustomInput
            changeHandler={this.nombreBinder}
            value={this.state.nombreProducto}
            name="nombreProducto"
            texto="Nombre del Producto"
            place="E.J: Harina, Azúcar"
            type="text"
          />
          <CustomInput
            changeHandler={this.cantidadBinder}
            value={this.state.cantidadProducto}
            name="cantidad"
            texto="Cantidad en existencia"
            place="#"
            min="0"
            max="999"
            type="number"
          />
          <CustomInput
            changeHandler={this.precioBinder}
            value={this.state.precioProducto}
            name="precio"
            texto="Precio por Unidad"
            place="$"
            min="0"
            step=".01"
            max="99999"
            type="number"
          />
          <button
            type="button"
            onClick={() => {
              this.SubmitProducto();
            }}
            className="btn btn-success btn-lg mt-2"
          >
            Aceptar
          </button>
        </form>
      </div>
    );
  }
}

export default FormProductos;
