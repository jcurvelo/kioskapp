import './App.scss';
import Home from './components/Home';
import Inventario from './components/inventario/VistaInventario';
import Compra from './components/compras/VistaCompra';
import Venta from './components/ventas/VistaVenta';
import Estadistica from './components/estadistica/VistaEstadistica';
import Config from './components/config/VistaConfig';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Switch>
          <Route path="/inventario">
            <Inventario />
          </Route>
          <Route path="/compra">
            <Compra />
          </Route>
          <Route path="/venta">
            <Venta />
          </Route>
          <Route path="/estadistica">
            <Estadistica />
          </Route>
          <Route path="/config">
            <Config />
          </Route>
          <Route exact path="/">
            <div className="d-flex justify-content-center">
              <h1 style={{color:'#f54611', fontWeight:'bold'}}>KIOSK</h1><h1 style={{color:'#288d6f'}}>APP</h1>
            </div>
            <h4 className="text-center">$1 = BsS. 3,000,000.00</h4>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
