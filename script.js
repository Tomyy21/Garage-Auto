var menu_toggle = document.querySelector(".menu_toggle");
var menu = document.querySelector(".menu");
var menu_toggle_span = document.querySelector(".menu_toggle span");

menu_toggle.onclick = function () {
  menu_toggle.classList.toggle("active");
  menu_toggle_span.classList.toggle("active");
  menu.classList.toggle("responsive");
};

// -------------------------------

let LirePlus1 = document.querySelector(".read_more1");
let LirePlus2 = document.querySelector(".read_more2");
let LirePlus3 = document.querySelector(".read_more3");
const service = document.querySelector(".service");
const depannage = document.querySelector(".depannage");
const textdepannage = document.querySelector(".textdepannage");
const textdepannagelong = document.querySelector(".textdepannagelong");

const service2 = document.querySelector(".service2");
const carroserie = document.querySelector(".carroserie");
const textcarroserie = document.querySelector(".textcarroserie");
const textdecarroserielong = document.querySelector(".textdecarroserielong");

LirePlus1.addEventListener("click", () => {
  service.classList.toggle("serviceAvantage");
  depannage.classList.toggle("depannageAvantage");
  textdepannage.classList.toggle("textdepannageAvantage");
  textdepannagelong.classList.toggle("textdepannagelongAvantage");
});

LirePlus2.addEventListener("click", () => {
  service2.classList.toggle("serviceAvantage2");
  carroserie.classList.toggle("carroserieAvantage");
  textcarroserie.classList.toggle("textcarroserieAvantage");
  textdecarroserielong.classList.toggle("textdecarroserielongAvantage");
});

LirePlus3.addEventListener("click", () => {
  console.log("t'a clické 3");
});
