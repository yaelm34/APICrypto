import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function OnClickElement(cryptoname){

    const history = useHistory();
    history.push("/list").then(
        function(res){
            const cookies = new Cookies();
            var current_cookie = cookies.get('currentcookie');
            console.log(current_cookie);
            cookies.set('currentcookie', current_cookie.push(cryptoname))
            console.log("NOW "+current_cookie);
        }
    );
    
    

}

export default OnClickElement;