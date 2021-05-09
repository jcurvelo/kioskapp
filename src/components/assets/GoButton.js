import './assets.scss';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

export default function GoButton(props){
    let history = useHistory();
    return(
        <div className="goButton" >
            <Fa icon={faArrowLeft} onClick={()=>{history.push(props.location)}} size="lg" />
        </div>
    );
}