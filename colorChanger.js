let button = document.querySelector("#colorButton");

let box = document.querySelector("#colorBox");

var randomColor = Math.floor(Math.random()*16777215).toString(16);

while(mouseIsPressed) {

  button.addEventListener("click", function() {
  
    box.style.backgroundColor = "#" + randomColor;
  
  });
}
