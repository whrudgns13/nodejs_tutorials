
const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body
    }
    login(){
        const body = this.body
        const {id, password} = UserStorage.getUserInfo(this.body.id);
        if(id===body.id && password===body.password){
            return {success : true}
        }
        return {success : false, msg : "아이디 혹은 비밀번호가 틀렸습니다."}
    }

    createUser(){
        const users = UserStorage.getUsers("id","password");
        if(users.id.includes(this.body.id)){
            return {success :false,msg : "중복된 아이디가 있습니다."}
        }else{
            UserStorage.addUser(this.body);
            return {success : true};
        }
    }
}

module.exports = User;