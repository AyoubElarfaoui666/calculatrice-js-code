const result = document.querySelector<HTMLDivElement>(".result")   ;
const elements = Array.from(document.querySelectorAll<HTMLDivElement>(".numbers div") ) ;

elements.forEach((ele) => {
    ele.onclick = (e) => {
        if(!result) return ;
        if((result.textContent ?? "").length >= 14){
            return ;
        }else if(result.textContent === "0"){
            result.textContent = "" ;
        }
        const target = e.target as HTMLElement ;
        if(target){
            const value = target.textContent 
            if(value === "="){
                try{
                    const text = eval(result.innerHTML).toString()
                    if(!text.includes(".")){
                        result.innerHTML = text ;
                    }else{
                        const arr = text.toString().split(".") ;
                        const sol = `${arr[0]}.${arr[1].length > 2 ?  arr[1].slice(0,2) : arr[1]}`
                        result.innerHTML = sol!== "0.00" ? sol : "0";
                    }
                }catch(err){
                    result.innerHTML = "Error" ;
                }
                
            }else if(value === "AC"){
                result.innerHTML = "0" ;
            }else if( value === "DEL"){
                result.innerHTML = result?.innerHTML.slice(0,-1) || "0" ;
            }else{
                result?.append(value) ;
            }
        }
    }
})




