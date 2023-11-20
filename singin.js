let username = document.getElementById("username")
let password = document.getElementById("Pass")
let singinBTN = document.getElementById("singinBTN")

singinBTN.addEventListener("click", ()=>{


    fetch("https://655b0b10ab37729791a875cb.mockapi.io/UsersInfo")
        .then(res => res.json())
        .then(data =>{  

            let userinput = username.value
            let passinput = password.value

            for(let i =0; i < data.length; i++){
                let userindb = data[i].UserName
                let passindb = data[i].Password

                if(userinput == userindb && passinput == passindb){
                    localStorage.setItem("Name", userinput)
                    window.location.href ="index.html"
                }

                
            }

        



            
     
        })
})