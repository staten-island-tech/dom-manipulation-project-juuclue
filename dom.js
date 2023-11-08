const DOMSelectors = {

    role: document.querySelector(".character"),
    Name: document.querySelector(".name"),
    url: document.querySelector(".pic"),
    form: document.querySelector(".form"),
    btn: document.querySelector(".btn"),
    display: document.querySelector(".display"),
    removeButton: document.querySelector(".removeButton"),

};


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const card = {};
  card.Name = document.getElementById("name").value;
  card.role = document.getElementById("role").value;
  card.url = document.getElementById("url").value;

  DOMSelectors.display.insertAdjacentHTML(
    "afterbgin",
    `<div class = "display-card">
    <img class = "display-img"> src = "${url.value}" alt=""
    <h2 class = "display-name">${Name.value}</h2>
    <h3 class="display-role">${role.value}</h3>
    <button class = "remove btn> remove pic</button>
    </div>`
  );



DOMSelectors.removeButton = document.querySelector(".remove");
insert(card);
clear();
remove(DOMSelectors.display);
});

function insert(card) {
  DOMSelectors.displayName = card.Name;
  DOMSelectors.displayRole= card.role;
  DOMSelectors.displayUrl = card.url;
};

function clear() {
DOMSelectors.Name.value = "";
DOMSelectors.role.value = "";
DOMSelectors.url.value = "";
};

function remove() {
DOMSelectors.removeButton.addEventListener("click", function () {
  document.querySelector(".display-card").remove();
});
DOMSelectors.displayName = "";
DOMSelectors.displayRole="";
DOMSelectors.displayUrl  = "";
};
