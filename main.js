const express = require("express");
app = express();

app.get('/', (req, res)=> {
    res.send("This is get route");
})

app.get('/about', (req, res)=> {
    res.send("This is about route ");
})

app.put('/contract', (req, res)=> {
    res.send("This is contract route ");
})

app.delete('/json', (req, res) => {
    const user = {
        name: "Arat Islam Safol",
        age: 27,
        email: "arat.safol@example.com",
        isActive: true,
        skills: ["HTML", "CSS", "JavaScript", "React"],
        address: {
            street: "123, Main Road",
            city: "Dhaka",
            zip: "1207",
            country: "Bangladesh"
        },
        projects: [
            {
            name: "Portfolio Website",
            tech: ["HTML", "CSS", "JavaScript"],
            completed: true
            },
            {
            name: "E-commerce Platform",
            tech: ["React", "Node.js", "MongoDB"],
            completed: false
            }
        ]
    };

    res.send(user);
})

app.get('/download', (req, res) => {
    res.download('./uploads/lws.PNG');
})

app.get('/bangladesh', (req, res)=>{
    res.redirect('http://localhost:5000/india');
})

app.get('/india', (req, res)=>{
    res.send('This is india');
})

// add header items
app.get('/append', (req, res)=> {
    res.append("name", "arat islam safol");
    res.append("age", 28);
    res.send("this is Append");
    res.status(200)
})

// add Cookies items
app.get('/cookie', (req, res)=> {
    res.cookie("name", "arat islam safol");
    res.cookie("age", 28);
    res.status(200).send("this is cookies");
})

// add Clear Cookies items
app.get('/clear-cookie', (req, res)=> {
    res.clearCookie("name", "arat islam safol");
    res.status(200).send("Clear cookies");
})


app.listen(5000, function () {
    console.log("server run successfully");
})