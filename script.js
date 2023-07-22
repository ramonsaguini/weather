const apiKey = "711139112329c196220863ed084a16cc"


function infoAtScreen(info){
console.log(info)
   document.querySelector(".city").innerHTML = "City:" + " " + info.name 
   document.querySelector(".temp").innerHTML =  Math.floor(info.main.temp) +  "°" 
   document.querySelector(".description").innerHTML =  info.weather[0].description  
   document.querySelector(".moisture").innerHTML = "Umidity:" +" " + info.main.humidity + "%"
   document.querySelector(".img-umidity").src = `https://openweathermap.org/img/wn/${info.weather[0].icon}.png`
}


async function searchCity(cityName){
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`).then(res => res.json())  
    
    infoAtScreen(info)
}

function clickIn(){
    const cityName = document.querySelector(".inp").value 

    searchCity(cityName)  
}


