const axios = require("axios");

module.exports = serviceId =>
  axios({
    url: `https://arcane-taiga-81642.herokuapp.com/api/service/${serviceId}`,
    method: "get"
  })
    .then(res => res.data)
    .catch(res => res.data);
