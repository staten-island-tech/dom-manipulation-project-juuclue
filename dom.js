const DOMSelectors = {

    role: document.querySelector(".role"),
    Name: document.querySelector(".Name"),
    url: document.querySelector(".url"),
    form: document.querySelector(".form"),
    submit: document.querySelector(".submit"),
    display: document.querySelector(".display"),
    removeButton: document.querySelector(".removeButton"),

};


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const card = {};
  card.Name = document.getElementById("Name").value;
  card.role = document.getElementById("role").value;
  card.url = document.getElementById("url").value;

  DOMSelectors.display.insertAdjacentHTML(
    "afterbgin",
    `<div class = "display-card">
    <img class = "display-url"> src = "${url.value}" alt=""
    <h2 class = "display-Name">${Name.value}</h2>
    <h3 class="display-role">${role.value}</h3>
    <button class = "remove btn> remove pic</button>
    </div>`
  );



DOMSelectors.removeButton = document.querySelectorAll(".remove");
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
/* DOMSelectors.removeButton.addEventListener("click", function () {
  document.querySelector(".display-card").remove();
}); */
DOMSelectors.displayName = "";
DOMSelectors.displayRole="";
DOMSelectors.displayUrl  = "";
};
console.log(remove);
DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
clear();
remove();
insert();
})

