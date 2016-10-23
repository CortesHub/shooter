import { character } from '../js/game.js';

console.log(character);

// test url img
let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");
let img = new Image(256,256);
img.onload = function () {
   alert("image is loaded");
   ctx.drawImage(img, 0, 0);
}
img.setAttribute('src', '../public/assets/SeamlessGrass.png');
