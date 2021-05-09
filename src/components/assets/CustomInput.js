export default function InputText(props) {
  return (
    <div className="inputText form-group">
      <label htmlFor={props.name}>{props.texto}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.place}
        min={props.type === 'number' ? props.min : false}
        max={props.type === 'number' ? props.max : false}
        step={props.step ? props.step : 1}
        value={props.value}
      />
    </div>
  );
}
