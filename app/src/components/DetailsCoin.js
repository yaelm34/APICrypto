
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { getCoin } from "../Api";
let detailscoin = [];
 
function DetailsCoin(props) {

    var id = props.id;
    const [description, getDescription] = useState('');
    //console.log(details);
    /*if(!props.isLoaded){
      return(
        <div>
          Chargement ... 
        </div>
      )
    }*/
    getCoin(id).then(function(res){
      //console.log("RES DATA");
      console.log(res.data.description);
      detailscoin = res.data.description.fr;
      //console.log("ICI " + details);
      getDescription(res.data);

     });

    
      
          return (
            
            <div>{detailscoin}</div>

          )
    
}



export default DetailsCoin