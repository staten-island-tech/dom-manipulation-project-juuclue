function spaces(s, y, t){
    let total = 0;
    for(let i = 0; i<s; i++) {
        if(y[i] === "C" && t[i] === "C") {
            total++;
        }
    }
    console.log(total);
}


/* function slots (S, Y, T){
let Y="C.C.C"
let T="..C.."
for(let N = ) {
    console.log(N);
 };

 if(Y == "C" && T == "C") {
    console.log("reserved");
    }
}
/* for (let Y = count; Y<=5; Y++){
    console.log(Y);
}
for(let T = count; T<=5; T++){
    console.log(T);
} */
 

