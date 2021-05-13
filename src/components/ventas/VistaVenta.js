import TableVenta from "./TableVenta";
import FormVenta from "./FormVenta";
import GoButton from "../assets/GoButton";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
export default function VistaVenta(props) {
  let history = useHistory();
  return (
    <div className="vistaVenta">
      <Router>
        <Switch>
          <Route path="/venta/nuevaVenta">
            <h1>Nueva Venta</h1>
            <GoButton location="/venta" />
            <FormVenta />
          </Route>
          <Route>
            <GoButton location="/" />
            <h3>Ventas</h3>
            <button
              onClick={() => {
                history.push("/venta/nuevaVenta");
              }}
              className="btn btn-primary mt-2 mb-1"
            >
              Nueva Venta
            </button>
            <TableVenta />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
