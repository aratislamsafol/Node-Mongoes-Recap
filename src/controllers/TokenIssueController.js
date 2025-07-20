var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const sercretKey = process.env.SECRETKEY;

exports.TokenIssue = ( req, res ) => {
    let payload = {
        exp: Math.floor(Date.now()/1000) + (60 * 60),
        data: {name: 'arat', city:'jashore', admin: true}
    }
console.log("Loaded secret:", sercretKey);
    let token = jwt.sign( payload, sercretKey )
    res.send(token);
}