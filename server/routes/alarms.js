var alarms = require('../lib/alarms.js');

module.exports = function(app) {
    function addAlarm(req, res, next) {
        alarms.addAlarm(req.body)
        .then(function(data){
            res.send(data.data)
        })
        .catch(function (err) {
            console.error(err.message);
            console.error(err.stack);
            res.send(err);
         });
    }
    app.post('/alarms', addAlarm)
};
