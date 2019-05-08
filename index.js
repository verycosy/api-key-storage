const axios = require("axios");

module.exports = serviceId =>
  axios({
    url: `https://keystorage.xyz/api/service/${serviceId}`,
    method: "get"
  })
    .then(res => res.data)
    .catch(err => err.response.data);
