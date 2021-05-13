import { Component } from "react";
import { ipcRenderer } from 'electron';
// export default function TablaProductos(){
//     return(
//         <div className="tablaProductos">
//             <table className="table table-dark">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Producto</th>
//                         <th>Stock</th>
//                         <th>Precio por Unidad</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                 </tbody>
//             </table>
//         </div>
//     )
// }

class TablaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    ipcRenderer.send('buscarDatosProductos','datos');
    ipcRenderer.on('enviarDatosProductos',(evt,arg)=>{
        console.log(arg);
    });
  }
  render() {
    return (
      <div className="tablaProductos">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Precio por Unidad</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default TablaProductos;