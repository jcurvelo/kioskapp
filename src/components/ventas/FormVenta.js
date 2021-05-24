import { useState, useEffect } from "react";
import CustomInput from "../assets/CustomInput";
import { useForm } from "react-hook-form";
import { ipcRenderer } from "electron";

async function crearVenta(props) {
  let res = await ipcRenderer
    .invoke("crearVentas", props)
    .catch((err) => console.error(err));
  return res;
}
async function buscarProuctos() {
  let res = await ipcRenderer
    .invoke("buscarDatosProductos")
    .catch((err) => console.error(err));
  return res;
}

function TarjetaVenta(props) {
  return (
    <div className="compraBox">
      <span className="cancelBtn">&times;</span>
      <div className="btn-group">
        <input
          type="radio"
          checked={!props.isUsd}
          className="btn-check"
          name="tipoPago"
          id="pagoBs"
        />
        <label className="btn btn-outline-primary" htmlFor="pagoBs">
          Bs
        </label>

        <input
          type="radio"
          checked={props.isUsd}
          className="btn-check"
          name="tipoPago"
          id="pagoUSD"
        />
        <label className="btn btn-outline-primary" htmlFor="pagoUSD">
          USD
        </label>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="producto">Producto</label>
            {/* <select id="producto" className="form-select form-control">
              {props.state.map((prod, key) => {
                return (
                  <option key={key} value={prod._id}>
                    {prod.nombreProducto}
                  </option>
                );
              })}
            </select> */}
          </div>
        </div>
        <div className="col">
          <CustomInput
            place="#"
            type="number"
            texto="Cantidad"
            min="1"
            max="999"
            register={props.register("product_ammount")}
          />
        </div>
      </div>
    </div>
  );
}

export default function FormVenta() {
  const [state, setState] = useState([]);
  const [listadoCompra, setListado] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => crearVenta(data);
  const addProducto = () => {setListado((prev) => prev.push({
        isUsd: false,
        producto: "",
        cantidad: "",
      })
    );
  }
  
  useEffect(() => {
    async function fetching() {
      let res = await buscarProuctos();
      setState([1,2,3]);
    }
    fetching();
  }, []);

  return (
    <div className="formVenta">
      <hr />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <button className="btn btn-primary mb-2" onClick={() => addProducto()}>
          +
        </button>
        {listadoCompra.map((data, key) => (
          <TarjetaVenta state={state} key={key} register={register} />
        ))}
        <button
          className="btn btn-primary btn-lg mt-2"
          onClick={() => crearVenta()}
        >
          Aceptar
        </button>
      </form>
    </div>
  );
}
