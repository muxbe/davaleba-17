let firstsection = document.querySelector(".section1");
const firstButton = document.querySelector(".firstbutton");
console.log(firstsection);
console.log(firstButton);
const divElement = document.createElement("div");
divElement.innerText = "hotel";
divElement.innerHTML =
  "<img class='img' src=' https://picsum.photos/id/1/200/300' alt='test' />";

divElement.classList.add("card");
firstButton.insertAdjacentElement("beforebegin", divElement);
function buttonClikFn(event) {
  //event.stopPrpagation();
  firstButton.parentNode.removeChild(firstButton);
}
firstButton.addEventListener("click", buttonClikFn);

const countrieslist = document.querySelector("#countrieslist");
function rendercountries(countries) {
  return countries.map(
    (el) => `
    <div class="countries">

    <img src="${el.flag}" alt="${el.name}" class="flagss">
    <div>
    <h1 class="countrih1">${el.name}</h1>
    <h3 class="countrih3">${el.capital[0]}</h3>
    <button class="more">schow more info</button>
    <button class="delete">delete card</button>

    </div>
    <div id="map" class="countrimap"><a href="${el.map}" target="_blank">${el.map}</a></div>
   
    </div>`
  );
}
const qveynebi = document.querySelector(".countries");
countrieslist.innerHTML = rendercountries(countries);
const countrimaP = document.querySelector(".countrimap");
const more = document.querySelector(".more");
function learnmore(learn) {
  countrimaP.classList.toggle("countrimap");
}
more.addEventListener("click", learnmore);
//function more(rem) {
//event.stopPrpagation();
//countrimaP.classList.toggle("countrimap");
//}
//countrimaP.addEventListener("click", more);

const countridelete = document.querySelector(".delete");

function remeovecard(del) {
  countridelete.parentElement.parentElement.remove();
}
countridelete.addEventListener("click", remeovecard);
//function reMove(this){
//this.parentElement.remove();
//}

//function removeParent() {
//countridelete.parentElement.remove();
//}
//countridelete.addEventListener("click", delete_row);
//countridelete.forEach((btn) => {
//btn.addEventListener("click", function () {
//btn.parentElement.remove();
//});
//});
const alldelete = document.querySelector(".allremove");
function deleteevriting(del) {
  alldelete.parentElement.parentElement.parentElement.remove();
}
alldelete.addEventListener("click", deleteevriting);
const valut = document.querySelector(".valuta");

function valuta(countries) {
  return countries.map(
    (el) =>
      ` <div class="valutadiv">
      <article class="valutaarticle">${el.currencies}</article>
      
    </div>`
  );
}
valut.innerHTML = valuta(countries);
