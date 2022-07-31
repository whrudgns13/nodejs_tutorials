const express = require("express");
const app = express();
const home = require("./src/routes/home");
const bodyParse = require("body-parser");
const session = require('express-session');
const FileStore = require("session-file-store")(session);
const port = 3000;
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store : new FileStore()
}))
app.use("/",home);

app.listen(port,()=>console.log("node start"))
