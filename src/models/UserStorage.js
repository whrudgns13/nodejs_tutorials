"use strict";

class UserStorage {
    static #users = {
        id : ["jo","ha"],
        password : ["1234","123"],
        nickname : ["joga","ojo"]
    }

    static getUsers(...args){
        const user = this.#users;
        const newUsers = args.reduce((prev,cur)=>{
             if(user.hasOwnProperty(cur)){
                prev[cur] = user[cur]
                return prev;
             }
        },{})
        return newUsers;
    }

    static getUserInfo(id){
        const user = this.#users;
        const userKey = Object.keys(user);
        const idx = user.id.findIndex(userId => userId===id);
        let newUser = {};
        userKey.forEach(key=>{
            newUser[key] = user[key][idx];
        })
        console.log(this.#users);
        return newUser;
    }

    static addUser({id,password,nickname}){
        this.#users.id.push(id)
        this.#users.password.push(password)
        this.#users.nickname.push(nickname)
    }
    
}

module.exports = UserStorage;