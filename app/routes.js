var auth = require('./routes/auth');
var example = require('./routes/example');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.end('hi');
    });
    app.post('/', function (req, res) {
        res.json(req.body);
    });

    app.use('/auth', auth);    
    app.use('/example', example);
}