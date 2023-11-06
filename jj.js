function spaces(s, y, t){
    let total = 0;
    for(let i = 0; i<s; i++) {
        if(y[i] === "C" && t[i] === "C") {
            total++;
        }
    }
    console.log(total);
}



 

