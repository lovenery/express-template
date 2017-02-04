// middleware
var jwt = require('jsonwebtoken');

var jwtMiddleware = function (req, res, next) {
    let token = req.body.token || req.headers['token'];
    if (token) {
        jwt.verify(token, process.env.APP_KEY, function (err, decode) {
            if (err) {
                res.status(401).send("Invalid Token");
            } else {
                next();
            }
        })
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = jwtMiddleware;