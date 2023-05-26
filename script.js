var images = [
  "./img/chiapas.webp",
  "./img/huila.webp",
  "./img/redbourbon.webp",
  "./img/sierranevada.webp",
];

var titulo = [
  "Café Chiapas",
  "Café Huila",
  "Café Red Bourbon",
  "Café Sierra Nevada",
];

var img = document.querySelector("img");
var title = document.querySelector("h1");
var izquierda = document.getElementById("izquie");
var derecha = document.getElementById("dere");

var contador = 0;
img.setAttribute("src", images[contador]);
title.innerText = titulo[contador];

var sumar = () => {
  contador++;
  if (contador > images.length - 1) {
    contador = 0;
  }
  img.setAttribute("src", images[contador]);
  title.innerText = titulo[contador];
  clearInterval(interval)
  interval = setInterval(sumar,3000);
};
var restar = () => {
  contador--;
  if (contador == -1) {
    contador = images.length - 1;
  }
  img.setAttribute("src", images[contador]);
  title.innerText = titulo[contador];
  clearInterval(interval)
  interval = setInterval(sumar,3000);
};
derecha.addEventListener("click", sumar);
izquierda.addEventListener("click", restar);

var interval = setInterval(sumar, 3000);





