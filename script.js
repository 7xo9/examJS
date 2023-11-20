let singinbtn = document.getElementById("singinbtn")
let singupbtn = document.getElementById("singupbtn")
let singoutbtn = document.getElementById("singoutbtn")
let lname = document.getElementById("lname")
let local = localStorage.getItem("Name");
let welmsg = document.getElementById("welmsg")
let info = document.getElementById("info")
if (local){
    singinbtn.style.cssText = "display: none"
    singupbtn.style.cssText = "display: none"
    welmsg.style.cssText = "display: none"
    singoutbtn.style.cssText = "disfplay: flex"
    info.style.cssText = "display: grid"


    lname.innerText = local
}

singoutbtn.addEventListener("click", ()=>{
    localStorage.setItem("Name","")   
})