import { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import { ipcRenderer } from "electron";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./inventario.scss";

export default function TablaProductos() {
  const [state, setState] = useState([]);
  useEffect(() => {
    ipcRenderer
    .invoke("buscarDatosProductos", "datos").then(res=>setState(res))
    .catch((err) => console.error(err));
    
  });
 
  return (
    <div className="tablaProductos">
      <table className="table table-dark">
        <thead>
          <tr className="text-center">
            <th>Producto</th>
            <th>Stock</th>
            <th>$</th>
            <th colSpan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>{state.map((prod,key)=>{
          return(
            <tr
            key={key}
            className="listado"
            style={{ animationDelay: `${50 * key}ms` }}
          >
            <td>{prod.nombreProducto}</td>
            <td>{prod.cantidadProducto}</td>
            <td>{prod.precioProducto}</td>
            <td className="text-center text-warning">
              <Fa
                icon={faPen}
                className="tableButtons"
                onClick={() => {
                  this.props.history.push({
                    pathname: "/inventario/nuevoProducto",
                    search: "?isEdit=true",
                    state: {
                      id: prod._id,
                      nombreProducto: prod.nombreProducto,
                      cantidadProducto: prod.cantidadProducto,
                      precioProducto: prod.precioProducto,
                    },
                  });
                }}
              />
            </td>
            <td className="text-center text-danger">
              <Fa
                icon={faTrash}
                className="tableButtons"
                onClick={() => {
                  this.delProducto(prod._id);
                }}
              />
            </td>
          </tr>
          );

    })}</tbody>
      </table>
    </div>
  );
}

