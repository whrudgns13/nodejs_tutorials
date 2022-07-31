'use strict';
console.log("heelo2")
const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const nickname = document.querySelector("#nickname");
const btn = document.querySelector("#submit");

const sign = (event) => {
    event.preventDefault()
    let req = {
        id: id.value,
        password: pw.value,
        nickname : nickname.value
    }
    fetch("/sign", {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        data.success ? location.href = "/login" : alert(data.msg);
    })
    .catch(error => {
        console.error(new Error("로그인 에러.."))
    })
}

btn.addEventListener("click", sign)