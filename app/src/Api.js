import axios from "axios";

var result;
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

export async function getAll(){

  return  axios.get('https://api.coingecko.com/api/v3/coins/list', config)
    /*.then(function (response) {
      result=response.data;
    });
*/
   // return result;
}

export function getCoin(id){

    axios.get('https://api.coingecko.com/api/v3/coins/'+id)
    .then(function (response) {
      result=response.data;
    });

    return result;
}



