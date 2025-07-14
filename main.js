const express = require("express");
app = express();

// Url Query request
// http://localhost:5000?firstName=arat&lastName=islam
app.get('/', (req, res)=> {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    res.send(firstName+ ' '+ lastName);
})

// Get Request Header
app.get('/header-req', (req, res)=> {
    const firstName = req.header('firstName');
    const lastName = req.header('lastName');
    res.end(firstName+ ' '+ lastName);
})


app.listen(5000, function () {
    console.log("server run successfully");
})