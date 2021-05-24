import './assets.scss';

export default function ToFormButton(props){
    return (
        <div
          onClick={() => {
            props.history.push(props.location);
          }}
          className="toFormButton mb-2"
        >
          <div className="insideBtn">{props.texto} +</div>
        </div>
      );
}