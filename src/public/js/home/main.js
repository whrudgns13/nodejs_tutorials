const main = document.querySelector(".main");

function setDefault(){
    fetch("/auth",{
        method : "GET"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.success){
            main.append(userInfo(data.user));    
        }else{
            main.append(loginBtn());
        }
    })
    .catch((error)=> console.log(error)
    )
}

function loginBtn(){
    let aTag = document.createElement("a");
    aTag.href = "/login";
    aTag.innerText = "login";
    return aTag
}

function userInfo({id,password,nickname}){
    let container = document.createElement("div");
    let authNickname = document.createElement("span")
    authNickname.innerText = `Hello ${nickname}`;
    let authId = document.createElement("span");
    authId.innerText = id;

    container.append(authNickname);
    container.append(authId);
    return container;
   
}
setDefault();