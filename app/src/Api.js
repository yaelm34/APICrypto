//import Cookies from 'universal-cookie';
//import {useHistory} from 'react-router-dom';
const axios = require("axios");

var result;
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

async function getAll(){

  return  axios.get('https://api.coingecko.com/api/v3/coins/list', config)

}

async function getTop(){

  return  axios.get('https://api.coingecko.com/api/v3/coins', config)

}

function getCoin(id){

   return axios.get('https://api.coingecko.com/api/v3/coins/'+id)
    

}

/*function OnClickElement(cryptoname){

  const cookies = new Cookies();
  var current_cookie = cookies.get('currentcookie');
  console.log(current_cookie);
  cookies.set('currentcookie', current_cookie.push(cryptoname))
  const history = useHistory();
  console.log("NOW "+current_cookie);
  history.push("/fav");

}*/

module.exports = {getAll,getCoin,getTop}; 