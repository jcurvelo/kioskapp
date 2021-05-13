import "./assets.scss";
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
      {props.name}
    </div>
  );
}
