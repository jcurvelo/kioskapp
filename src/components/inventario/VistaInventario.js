import TablaProductos from "./TablaProductos";
import FormProductos from "./FormProductos";
import GoButton from '../assets/GoButton';
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
export default function VistaInventario() {
  let history = useHistory();
  return (
    <div className="vistaInventario">
      <Router>
        <Switch>
          <Route path="/inventario/nuevoProducto">
            {/* <button
              onClick={() => {
                history.push("/inventario");
              }}
            >
              Regresar
            </button> */}
            <GoButton location="/inventario" />
            <FormProductos />
          </Route>
          <Route path="/inventario">
             <GoButton location="/" />
            <button className="btn btn-primary mb-2"
              onClick={() => {
                history.push("/inventario/nuevoProducto");
              }}
            >
              Agregar Nuevo Producto
            </button>
            <TablaProductos></TablaProductos>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
