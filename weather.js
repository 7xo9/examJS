let prayerTime = document.getElementById("prayerTime")
let date = document.getElementById("date")
let day = document.getElementById("day")
let Fajer = document.getElementById("Fajer")
let Dhuhr = document.getElementById("Dhuhr")
let Asr = document.getElementById("Asr")
let Maghrib = document.getElementById("Maghrib")
let Isha = document.getElementById("Isha")
let dateTrans = document.getElementById("dateTrans")
let melady = document.getElementById("melady")

function getdata(){
    fetch("https://api.aladhan.com/v1/calendarByCity/2017/4?city=Riyadh&country=Suadi Arabia&method=4")
    .then(res => res.json())
    .then(data => {

        let Firstvalue = data.data[0]
        date.innerText = Firstvalue.date.gregorian.date;

        dateTrans.addEventListener("click",()=>{
         
            if (date.innerText = Firstvalue.date.gregorian.date){
                date.innerText =  Firstvalue.date.hijri.date;     
            }
          
            
        })

        melady.addEventListener("click",()=>{
         
            date.innerText = Firstvalue.date.gregorian.date
          
            
        })
       
        day.innerText= Firstvalue.date.gregorian.weekday.en
        
        
        let x = Firstvalue.timings
        
        Fajer.innerText = `Fajer: ${x.Fajr}`
        Dhuhr.innerText = `Dhuhr: ${x.Dhuhr}`
        Asr.innerText = `Asr: ${x.Asr}`
        Maghrib.innerText = `Maghrib ${x.Maghrib}`
        Isha.innerText = `Isha: ${x.Isha}`
     
        
    })

}

getdata()
