var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var jwtMiddleware = require('../middleware/jwt');

router.get('/test', function(req, res){
    // res.end(process.env.APP_KEY);
    var user = {
        username: 'test',
        email: 'test@test.tw'
    }
    var token = jwt.sign(user, process.env.APP_KEY, {
        expiresIn: 400
    });
    res.json({
        success: true,
        token: token
    })
});

router.post('/test', jwtMiddleware, function(req, res){
    res.json('success');
});

module.exports = router;