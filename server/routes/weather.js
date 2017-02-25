var weather = require('../lib/weather.js');

module.exports = function(app) {
    function getWeather(req, res, next) {
        weather.getWeather(req.params.lat, req.params.long)
        .then(function(data){
            res.send(data.data)
        })
        .catch(function (err) {
            console.error(err.message);
            console.error(err.stack);
            res.send(err);
         });
    }
    app.get('/weather/:lat/:long/', getWeather)
};
