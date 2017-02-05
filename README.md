# MENA Template

MENA = Mongo + Express + Node + API

## Requirements

- Node.js 6.x
- Mongodb 3.x
- Redis(Optional)

## Install
`npm install nodemon -g`  
`npm install`  
`cp .env.json.example .env`  
`npm start` ( =`nodemon`)  

## Package References
- nodemon [site](https://nodemon.io/) | [Github](https://github.com/remy/nodemon)
- express [site](http://expressjs.com/) | [zh-tw](http://expressjs.com/zh-tw/) | [Github](https://github.com/expressjs/express)
- body-parser [Github](https://github.com/expressjs/body-parser)
- mongoose [site](http://mongoosejs.com/) | [Github](https://github.com/Automattic/mongoose)
- dotenv [Github](https://github.com/motdotla/dotenv)
- jwt [site](https://jwt.io/) | [Github](https://github.com/auth0/node-jsonwebtoken)
- express-limiter [Github](https://github.com/ded/express-limiter) or [ratelimiter by tj](https://github.com/tj/node-ratelimiter) exactly same thing you can replace it (modify app.js & config/limiter.js)