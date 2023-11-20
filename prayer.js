
let cityName = document.getElementById("cityName")
let tempo = document.getElementById("temp")
let humn = document.getElementById("humn")
let latt = document.getElementById("latt")
let lonn = document.getElementById("lonn")
let userinput = document.getElementById("userinput")
let subBTN = document.getElementById("subBTN")

subBTN.addEventListener("click", ()=>{

    let nameOfCity = userinput.value 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=34a0a94f9a82cb10f45a4407fac66bf0`)
    .then(res=> res.json())
    .then(data => {

  
        
        let city = data.name
        let temp = data.main.temp
        let hum = data.main.humidity
        let lat = data.coord.lat
        let lng = data.coord.lon

       cityName.innerText =`City Name: ${city}`
       tempo.innerText = `The Temp: ${temp}`
       humn.innerText= `Humidity: ${hum} `
       latt.innerText = `Lat: ${lat}`
       lonn.innerText = `Lon: ${lng}`
    
    })

})

