
function inputValue(value) {
var input = document.getElementById("input");
input.value += value;
}
      
function result() {
var input = document.getElementById("input");
var ans = eval(input.value);
input.value = ans;
}
      
function allClear() {
var input = document.getElementById("input");
input.value = "";
}
      
 function removeValue(){
var input = document.getElementById("input");
input.value = input.value.slice(0,-1)
}
