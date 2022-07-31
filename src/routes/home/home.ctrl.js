const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    sign: (req, res) => {
        res.render("home/sign")
    },
    auth : (req,res)=>{
        const session = req.session;
        console.log(session);
        if (session.is_login) {
                res.send({
                    success:true,
                    user : UserStorage.getUserInfo(session.userid)
                })
        }else{
            
            res.send({success:false})
        }
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log("body : ");
        console.log(req.body);
        if (response.success) {            
            req.session.is_login = true;
            req.session.userid = req.body.id;
            req.session.password = req.body.password;
        }
        res.send(response)
    },
    sign: (req, res) => {
        const user = new User(req.body);
        const respose = user.createUser();
        res.send(respose);
    }
}
module.exports = {
    output,
    process
}