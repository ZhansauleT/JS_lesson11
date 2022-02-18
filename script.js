const btn = document.getElementById("btn");
const input = document.getElementById("text");
const range = document.getElementById("range");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const span_range = document.getElementById("range-span");

input.placeholder = "Type a color";
btn.addEventListener('click', function() {
  
  square.style.backgroundColor = input.value;
});

circle.addEventListener('mousedown', function(){
  circle.style.display = "none";
});

range.addEventListener('change', function(){
  span_range.textContent = range.value;
  circle.style.height = range.value+"%";
  circle.style.width = range.value+"%";
});





