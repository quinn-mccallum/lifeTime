const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let profile = {
    name: "",
    email: "",
    age: 0,
    sex: "",
    chores: 0,
    care: 0,
    sleep: 0,
    work: 0,
    phone: 0,
    tv: 0
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/signup", (req, res) => {
    profile = req.body;
})

app.get("/data", (req, res) => {
    res.json({ profile: profile });
})

app.post("/data", (req, res) => {
    barline = req.body.barline;
    doughnutline = req.body.doughnutline;
})

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});