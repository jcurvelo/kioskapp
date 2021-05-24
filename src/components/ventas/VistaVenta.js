import TableVenta from "./TableVenta";
import FormVenta from "./FormVenta";
import GoButton from "../assets/GoButton";
import ToFormButton from '../assets/ToFormButton';
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./ventas.scss";

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
            <ToFormButton history={history} location="/venta/nuevaVenta" texto="Nueva Venta" />
            {/* <div
              onClick={() => {
                history.push("/venta/nuevaVenta");
              }}
              className="nuevaVentaBtn"
            >
              <div className="inside">
                Nueva Venta
              </div>
            </div> */}
            <TableVenta />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
