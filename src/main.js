let result = document.querySelector(".result") ;
let buttons = document.querySelectorAll(".numbers div") ;

Array.from(buttons).forEach((ele,index) => {
    ele.onclick = (e) => {
        let val = e.target.innerHTML ;
        if(val === "AC"){
            result.innerHTML = "0" ;
        }else if(val === "DEL" ){
            let arr = result.innerHTML.split("").slice(0,-1) ;
            result.innerHTML = arr.join("") ;
        }else if(val === "="){
            try{
                result.innerHTML = eval(result.innerHTML) ;
            }catch(err){
                result.innerHTML = err ;
            }
        }else{
            if(result.innerHTML.length <14){
                if(result.innerHTML !== "0"){
                    result.append(val) ;
                }else{
                    result.innerHTML = val ;
                }
            }
        }
    }
})