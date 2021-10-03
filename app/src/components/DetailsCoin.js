
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { getCoin } from "../Api";
 
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
      console.log("RES DATA");
      console.log(res.data.description);
      const details = res.data;
      console.log("ICI " + details);
      getDescription(res.data);

     });

    
      
          return (
            description.map((key, index) =>{
              console.log(description);
              return(

                
                <div>{key.description}</div>

              );
            
            
            }
          )

          

          )
    
}



export default DetailsCoin