const axios = require("axios");

module.exports = serviceId =>
  axios({
    url: `https://www.keystorage.xyz/api/service/${serviceId}`,
    method: "get"
  })
    .then(res => res.data)
    .catch(res => res.data);
