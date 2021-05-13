import GoButton from "../assets/GoButton";
import TableCompra from "./TableCompra";
import FormCompra from "./FormCompra";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
export default function VistaCompra(props) {
    let history = useHistory();
  return (
    <div className="vistaCompra">
      <Router>
        <Switch>
          <Route path="/compra/nuevaCompra">
            <GoButton location="/compra" />
            <h3>Nueva Compra</h3>
            <FormCompra />
          </Route>
          <Route path="/compra">
            <GoButton location="/" />
            <h3>Compras</h3>
            <button className="btn btn-primary mb-2" onClick={()=>{history.push('/compra/nuevaCompra')}}>Nueva Compra</button>
            <TableCompra />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
