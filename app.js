/** @format */

let btn = document.querySelector("button");

function BMW() {
  let randomNumber = Math.floor(Math.random() * 6);
  let colors = ["violet", "yellow", "white", "blue", "green", "purple"];
  console.log(colors[randomNumber]);
  document.body.style.backgroundColor = colors[randomNumber];
}
BMW();

btn.addEventListener("click", BMW);
