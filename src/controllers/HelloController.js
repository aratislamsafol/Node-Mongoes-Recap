exports.Hello = ( req, res )=> {
    res.status(200).json({status:"success", data: "Hello This is express rest api"});
}

exports.HelloPost = ( req, res )=> {
    res.status(201).json({status:"success", data: "Hello Post This is express rest api"});
}