var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const sercretKey = process.env.SECRETKEY;

module.exports = ( req, res, next ) => {
    let Token = req.headers['token-key'];
    
    jwt.verify( Token, sercretKey, function (err, decoded) {
        if(err) {
            res.status(401).json({status: "Invalid Token", data:err})    
        } else {
           next();    
        }
    } )
    
}