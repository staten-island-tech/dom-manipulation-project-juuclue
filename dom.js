const DOMselectors = {

    character: document.querySelector(".character"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    box: document.querySelector(".box"),
    form: document.querySelector(".form"),
    btn: document.querySelector(".btn"),

};


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const pic = {};
  pic.name = document.getElementById("name").value;
  pic.character = document.getElementById("character").value;
  pic.pic = document.getElementById("pic").value;

  DOMselectors.display.insertAdjacentHTML(
    
  )

})
function card () {
`<div class = "cards">
<h3 class = "subheader"> spongebob!</h3>
    <img class = "images" src="https://www.diamondartclub.com/cdn/shop/collections/SpongeBob_SquarePants.jpg?v=1657679842" alt="">
    </div>`}

    DOMselectors.removeButton = document.querySelector(".remove");
    inject(album);
    clear();
    removeEventListener(DOMselectors.display);
