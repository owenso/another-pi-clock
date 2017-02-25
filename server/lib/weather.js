const axios = require('axios');
const keys = require ('../../config/keys');

exports.getWeather = (lat, long) => {
    return axios.get(`https://api.darksky.net/forecast/${keys.darkSkyKey}/${lat},${long}`)
}