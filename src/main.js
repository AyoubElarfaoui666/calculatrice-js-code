let elements2 = ["crocodile","gorilla","macaw","monkey","piranha","sloth","tiger","toucan"] ;
let btnStart = document.querySelector(".btnStart") ;
let btnStop = document.querySelector(".btnStop") ;
let container = document.querySelector(".btnStart + div")  ;
let wrapper = document.querySelector(".wrapper") ;
let mv = document.querySelector(".moves span") ;
let time = document.querySelector(".time span") ;
let elements1 ;
let flipCards = [] ;
let lockboard = false ;
let move = 0 ;
let tm = 0 ;
let timerID;

btnStart.onclick = (e) => {
    if(e.currentTarget.innerHTML === "You fail" || e.currentTarget.innerHTML ===  "you win") return;
    
    e.currentTarget.classList.toggle("hidden");
    container.classList.toggle("hidden");
    wrapper.innerHTML = "";
    elements1 = [...elements2, ...elements2];
    createElements();

    clearInterval(timerID); 
    tm = 0;
    timerID = setInterval(() => {
        tm++;
        let minutes = Math.floor(tm / 60);
        let seconds = tm % 60;
        time.innerHTML = `${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
        entTheGAme();
    }, 1000);
}


btnStop.onclick = (e) => {
    btnStart.classList.toggle("hidden") ;
    container.classList.toggle("hidden") ;
}

function createElements(){
    for(let i = 1; i <= 4; i++){
        for(let j = 1; j <= 4; j++){
            let box = document.createElement("div");

            let front = document.createElement("div");
            front.innerHTML = "?";
            front.className = "face front border-4 rounded border-black   text-8xl flex justify-center bg-amber-300 font-black cursor-pointer";

            let back = document.createElement("div");
            back.className = "face back border-4 rounded border-black    text-8xl flex justify-center  font-black cursor-pointer";

            let img = document.createElement("img");
            let num = Math.floor(Math.random() * elements1.length);
            img.src = `/${elements1[num]}.png`; 
            img.className = "w-full h-auto p-3 box-border";
            box.dataset.name = elements1[num] ;
            elements1.splice(num, 1);

            back.append(img);
            box.className = "box col-span-3 row-span-3"
            box.append(front, back);
            wrapper.append(box);
            box.addEventListener("click",() => {
                if(lockboard || box.classList.contains("flipped")) return ;
                box.classList.add("flipped") ;
                flipCards.push(box) ;
                if(flipCards.length === 2){
                    checkMatch() ;
                }
                move++ ;
                mv.innerHTML = move ;
                entTheGAme() ;
            })
        }
    }
}

function checkMatch(){
    let [first , second] = flipCards ;
    if(first.dataset.name === second.dataset.name){
        flipCards= [] ;
        let boxs = Array.from(document.querySelectorAll(".box"));
        if(boxs.every((ele) => ele.classList.contains("flipped"))){
            tm = 0;
            btnStart.innerHTML = `you win`;
            move = 0;
            mv.innerHTML = move;
            time.innerHTML = "00:00";
            btnStart.classList.toggle("hidden");
            container.classList.toggle("hidden");
        }

    }else{
        lockboard = true ;
        setTimeout(() => {
            first.classList.remove("flipped") ;
            second.classList.remove("flipped") ;
            flipCards = [] ;
            lockboard = false ;
        },1000) ;
    }
}

function entTheGAme(){
    if(tm >= 60 || move >= 40){ 
        tm = 0;
        move = 0;
        mv.innerHTML = move;
        time.innerHTML = "00:00";
        btnStart.classList.toggle("hidden");
        container.classList.toggle("hidden");
        btnStart.innerHTML = "You fail";
        setTimeout(() => {
            btnStart.innerHTML = "Start Game";
        }, 3000);
        lockboard = true; 
    }
}




















