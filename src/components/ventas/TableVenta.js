import { useState, useEffect } from "react";
import {ipcRenderer} from 'electron';

function TarjetaVenta(props) {
  return (
    <div className="tarjetaVenta p-1 mt-1">
      <div className="overlay">
        <div className="p-1">
          <span>18/05/2021</span>
          <h5>$10</h5>
          <h6>Bs. 28000000.00</h6>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="verDetalles d-flex justify-content-center align-items-center">
            Detalles
          </span>
        </div>
      </div>
    </div>
  );
}
export default function TablaVenta(props) {
    const [state, setState] = useState([]);
    useEffect(() => {
      ipcRenderer
      .invoke("buscarDatosProductos", "datos").then(res=>setState(res))
      .catch((err) => console.error(err));
      
    });

  return (
    <div className="tablaVenta">
      {state.map((props,key)=>{
          return(
            <TarjetaVenta key={key} />
          );
      })}
    </div>
  );
}
