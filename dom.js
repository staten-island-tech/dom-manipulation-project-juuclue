const DOMSelectors = {

 form: document.querySelector("#form"), 
 creature: document.querySelector(".creature"),
 name: document.querySelector(".name"),
 url: document.querySelector(".url"),
 gallery: document.querySelector(".gallery"),
 card: document.querySelector(".card"),
 cardimg: document.querySelector(".cardimg"),
 button: document.querySelector(".btn"),

};

function divCreator(creature, name, url){
  DOMSelectors.gallery.insertAdjacentHTML(
    "afterbegin",
    `div class="gallery"> 
    <div class="card">
    <h3>${name}</h3> 
    <img src ="${url}" alt= "" class="cardimg">
    <h4>${creature}</h4>
    <button class="btn"> Remove</button>
    </div>
    </div>`
  )
};
function insert(){
    DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const creature= DOMSelectors.creature.value
    const name = DOMSelectors.name.value
    const url= DOMSelectors.url.value
    divCreator(creature, name, url)
    const removebuttons= document.querySelectorAll(".btn");
    removebuttons.forEach((button)=> {
      button.addEventListener("click", function(event){
      const objectRemove =event.target.parentElement;
      objectRemove.remove();
    });

  });
});
}
insert()


DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  function clear(){
    DOMSelectors.creature.value="";
    DOMSelectors.name.value="";
    DOMSelectors.url.value="";
  }
  clear()
});


