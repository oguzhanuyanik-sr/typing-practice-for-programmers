// Selectors
const output = document.getElementById("random");
const input = document.getElementById("input");
const body = document.querySelector("body");

// Focus on input
focus = () => input.focus();
window.onload = focus;
body.addEventListener("click", focus);

// Random symbols
const symbols = ["!","'","~","`","#","@","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";",">","<",",",".","?"];
generate = () => {
  let random = Math.floor(Math.random() * symbols.length);
  output.textContent = symbols[random];
  input.value = "";
}
generate();

// Typing
input.addEventListener("keypress", (event) => {
  if(event.key==output.textContent){
    generate();
  } 
  else {
    input.value = "";
  }
});

input.addEventListener("keyup", (event) => {
    input.value = "";
});