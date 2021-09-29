const axios = require("axios");

var result;
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

async function getAll(){

  return  axios.get('https://api.coingecko.com/api/v3/coins/list', config)
    /*.then(function (response) {
      result=response.data;
    });
*/
   // return result;
}

function getCoin(id){

    axios.get('https://api.coingecko.com/api/v3/coins/'+id)
    .then(function (response) {
      result=response.data;
    });

    return result;
}

module.exports = {getAll,getCoin};