import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import OnClickElement from './OnClickElement';
//import { OnClickElement } from '../Api';
function Element(props){

    var url = "details/"+ props.crypto.id;

 
    return(
        <div href={url}>
            <h2 href={url}><a href={url}>{props.crypto.name}</a></h2>
            <h3>{props.crypto.symbol}</h3>
            <a href='/fav'>Add to favorites</a>
            
        </div>
    );
}

//<button onClick= {OnClickElement(props.crypto.name)}>Add to favorites</button>

export default Element;
