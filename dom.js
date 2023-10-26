/*const DOMselectors = {
    bigbootycheeks: document.getElementById("btc"),
    cheeks:document.querySelector("#cheeks"),
    purr:document.getElementById("purr"),
    point: document.querySelectorAll(".point"),

//    empty: document.querySelector(".nothing"),

};
*/
//console.log(DOMselectors);
let btnclear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnclear.addEventListener('click', () => {
 inputs.forEach(input => input.value = '');
});


/* const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>",
  );
});

const del = document.querySelectorAll("#del");
del.addEventListener("click", () => {
  document.location.reload();
}); */

/* const submit = document.querySelectorAll("submit");
submit.addEventListener("click", () => {
  document.location.savedata();
});
document.querySelector("#delete").addEventListener('click', () => {
  document.getElementById("input").innerHTML = ''
}); */

//DOMselectors.form.addEventListener("submit", function(event)){

//}