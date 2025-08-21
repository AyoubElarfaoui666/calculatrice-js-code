
let seconds = document.querySelector(".seconds") ;
let minutes = document.querySelector(".minutes") ;
let hours = document.querySelector(".hours") ;

setInterval(() => {
    let time = new Date() ;
    console.log(time)
    let second = time.getSeconds() ;
    let minute = time.getMinutes() ;
    let hour = time.getHours() ;
    let secondDeg = second * 6 ;
    let minuteDeg = minute * 6 ;
    let hourDeg = hour * 30 + minute * 0.5 ;
    seconds.style.cssText = `transform : rotate(${secondDeg}deg)` ;
    minutes.style.cssText = `transform : rotate(${minuteDeg}deg)` ;
    hours.style.cssText = `transform : rotate(${hourDeg}deg)` ;
},1000)
















