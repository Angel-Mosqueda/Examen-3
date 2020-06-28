const axios = require('axios')
const api_Key='p9bibVVYe4cvlcXcKdm5CYPYG4iuBqWyjwpF83S8';
const modelDatos = {
    getData: async () => {
        return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_Key}`)
        .then(data => data )
        .catch(err => {console.log(err); return err })
    }
}
module.exports = modelDatos;
