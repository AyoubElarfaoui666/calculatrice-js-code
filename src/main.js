let time = document.querySelector(".time") ;
let btnStart = document.querySelector(".start") ;
let btnStop = document.querySelector(".stop") ;
let btnReset = document.querySelector(".reset") ; 

let count = 0 ;
let clearLoop ;

btnStart.onclick = () => {
    clearLoop = setInterval(() => {
        count++ ;
        let second = count%60 ;
        let minutes = Math.floor(count/60) ;
        let hour = Math.floor(minutes/60 ) ;
        time.innerHTML = `${hour <= 9 ? "0"+hour : hour} :  ${minutes <= 9 ? "0"+minutes : minutes} : ${second <= 9 ? "0"+second : second}`
    },1000) ;
}

btnStop.onclick = () => {
    clearInterval(clearLoop) ;
}

btnReset.onclick = () => {
    time.innerHTML = `00 : 00 : 00` ;
    count = 0 ;
}


















