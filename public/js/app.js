import { character } from '../js/game';
import { Player } from '../js/class/player';


const option = {
  x: 0,
  y: 0,
  id: Math.random(),
  moveAmount: 1
}
let choupi = new Player(option);

console.log(choupi);


// test url img
let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");
let img = new Image(256,256);
img.onload = function () {
   alert("image is loaded");
   ctx.drawImage(img, 0, 0);
}
img.setAttribute('src', '../public/assets/SeamlessGrass.png');
