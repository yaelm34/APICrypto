import { Link } from 'react-router-dom'
import Element from "./Element"
 
function ListCrypto(props) {

    var cryptos = props.cryptos;
    console.log(cryptos);

    if(!props.isLoaded){
      return(
        <div>
          Chargement ... 
        </div>
      )
    }

    return (
        
        <div>
          {props.cryptos.map(function(name,index){return<Element crypto={name}/>})}
        </div>
    )
}



export default ListCrypto