let user = document.getElementById("user")
let username = document.getElementById("username")
let email = document.getElementById("Email")
let pass = document.getElementById("Pass")

let SingUpBTN = document.getElementById("SingUpBTN")
let error = document.getElementById("error")

let userRe = /^[A-Za-z]{4,16}$/
let usernameRe = /^[A-Z]+[a-z]{3,16}$/
let emailRe = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


SingUpBTN.addEventListener("click", ()=>{
   
    let Vailduser = userRe.test(user.value)
    let VailduserName = usernameRe.test(username.value)
    let VaildEmail = emailRe.test(email.value)
    let passlen = pass.value

    if (Vailduser && VailduserName && VaildEmail && passlen.length > 4){
        // post
        
        fetch("https://655b0b10ab37729791a875cb.mockapi.io/UsersInfo", {
            method:"POST",
            body: JSON.stringify({
                Name: user.value,
                UserName: username.value,
                Email: email.value,
                Password: pass.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(res => res.json())
        .then(data => {})

        window.location.href = "singin.html"

    }else if(!Vailduser){
        error.innerText = "invaild Name"
    }else if(!VailduserName){
        error.innerText = "invaild UserName"
    }else if(!VaildEmail){
        error.innerText = "invaild Email"
    }else if(passlen.length < 4){
        error.innerText = "invaild Password"
    }


})