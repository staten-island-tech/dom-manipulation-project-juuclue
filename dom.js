const DOMSelectors = {

    character: document.querySelector(".character"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    box: document.querySelector(".box"),
    form: document.querySelector(".form"),
    btn: document.querySelector(".btn"),
    display: document.querySelector(".display"),

};


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const card = {};
  card.name = document.getElementById("name").value;
  card.character = document.getElementById("character").value;
  card.pic = document.getElementById("pic").value;

  DOMSelectors.display.insertAdjacentHTML(
    "afterbgin",
    `<div class = "display-card">
    <img class = "display-img"> src = "${pic.value}" alt=""
    <h2 class = "display-name">${name.value}</h2>
    <button class = "remove btn> remove pic</button>
    </div>`
  );



DOMSelectors.removeButton = document.querySelector(".remove");
insert(card);
clear();
remove(DOMSelectors.display);
});

function insert(card) {
  DOMSelectors.displayname = card.name;
  DOMSelectors.displaycharacter = card.character;
  DOMSelectors.displaypic = card.pic;
};
/* function card () {
`<div class = "cards">
<h3 class = "subheader"> spongebob!</h3>
    <img class = "images" src="https://www.diamondartclub.com/cdn/shop/collections/SpongeBob_SquarePants.jpg?v=1657679842" alt="">
    </div>`}

    DOMselectors.removeButton = document.querySelector(".remove");
    inject(album);
    clear();
    removeEventListener(DOMselectors.display);
 */
function clear() {
DOMSelectors.name.value = "";
DOMSelectors.character.value = "";
DOMSelectors.pic.value = "";
}

function remove() {
DOMSelectors.removeButton.addEventListener("click", function () {
  document.querySelector(".display-card").remove();
});
DOMSelectors.displayname = "";
DOMSelectors.displaycharacter="";
DOMSelectors.displaypic  = "";
};
