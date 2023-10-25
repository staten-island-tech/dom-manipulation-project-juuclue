/*const DOMselectors = {
    bigbootycheeks: document.getElementById("btc"),
    cheeks:document.querySelector("#cheeks"),
    purr:document.getElementById("purr"),
    point: document.querySelectorAll(".point"),

//    empty: document.querySelector(".nothing"),

};
*/
//console.log(DOMselectors);



const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>",
  );
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
const firstname = (prompt("type your firstname"));
const lastname = (prmpt("type your lastname"));
console.log(insert);

function fun(){  
    document.getElementById("myForm").reset();  
}
//DOMselectors.form.addEventListener("submit", function(event)){

//}