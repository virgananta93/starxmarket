const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://coingecko.p.rapidapi.com/coins/markets?page=1&per_page=10&order=market_cap_desc&vs_currency=usd",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"coingecko.p.rapidapi.com",
    "x-rapidapi-key":"263ef54c74mshaf2469e5f43e457p138478jsne1daf7d36ad0",
    "useQueryString":true
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })