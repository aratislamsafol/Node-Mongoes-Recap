var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const sercretKey = process.env.SECRETKEY;

exports.CreateToken = ( req, res ) => {
    let payload = {
        exp: Math.floor(Date.now()/1000) + (30),
        data: {name: 'arat', city:'jashore', admin: true}
    }
console.log("Loaded secret:", sercretKey);
    let token = jwt.sign( payload, sercretKey )
    res.send(token);
}

// DecodeToken Controller -> token send with header (best practice)
exports.DecodeToken = ( req, res ) => {
    let Token = req.headers['token-key'];

    jwt.verify( Token, sercretKey, function (err, decoded) {
        if(err) {
            res.status(401).json({status: "Invalid Token", data:err})    
        } else {
            res.status(200).json({status: "Token Decoded", data:decoded})    
        }
    } )
}