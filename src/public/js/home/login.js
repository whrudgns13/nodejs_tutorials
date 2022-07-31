'use strict';

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const btn = document.querySelector("#submit");

const login = (event) => {
    event.preventDefault()
    let req = {
        id: id.value,
        password: pw.value
    }
    fetch("/login", {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.success ? location.href = "/" : alert(data.msg);
    })
    .catch(error => {
        console.error(new Error("로그인 에러.."))
    })
}

btn.addEventListener("click", login)