import "./assets.scss";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faShoppingCart,
  faBoxes,
  faChartBar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
export default function OptionSelectButton(props) {
  let history = useHistory();
  return (
    <div
      className="optionSelectButton"
      onClick={() => {
        history.push(props.ruta);
      }}
    >
      <div className="inside">
        <Fa
          icon={
            props.register
              ? faCashRegister
              : props.cart
              ? faShoppingCart
              : props.box
              ? faBoxes
              : props.chart
              ? faChartBar
              : faWrench
          }
        />
        <span>
          {props.name}
        </span>
      </div>
    </div>
  );
}
