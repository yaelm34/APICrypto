import axios from "axios";

var result;

export function getAll(){

    axios.get('https://api.coingecko.com/api/v3/coins/list')
    .then(function (response) {
      result=response.data;
    });

    return result;
}

export function getCoin(id){

    axios.get('https://api.coingecko.com/api/v3/coins/'+id)
    .then(function (response) {
      result=response.data;
    });

    return result;
}



