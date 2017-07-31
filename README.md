# Express Template

My Web Template using Node.js(Express) Mongodb

## Requirements

- Node.js 8.x
- Mongodb 3.x
- Redis(Optional)

## Install

```
npm install
cp .env.example .env
npm start
```

## Config

- config/cors.js "Access-Control-Allow-Origin"

## Package References
- nodemon [Site](https://nodemon.io/) | [GitHub](https://github.com/remy/nodemon)
- express [Site](http://expressjs.com/) | [zh-tw](http://expressjs.com/zh-tw/) | [GitHub](https://github.com/expressjs/express)
- body-parser [GitHub](https://github.com/expressjs/body-parser)
- mongoose [Site](http://mongoosejs.com/) | [GitHub](https://github.com/Automattic/mongoose)
- dotenv [GitHub](https://github.com/motdotla/dotenv)
- jwt [Site](https://jwt.io/) | [GitHub](https://github.com/auth0/node-jsonwebtoken)
- express-limiter [GitHub](https://github.com/ded/express-limiter) or [ratelimiter by tj](https://github.com/tj/node-ratelimiter) exactly same thing you can replace it (modify app.js & config/limiter.js)
- request [GitHub](https://github.com/request/request)
- morgan [GitHub](https://github.com/expressjs/morgan)
- ejs [Site](http://ejs.co/) [GitHub](https://github.com/mde/ejs)
