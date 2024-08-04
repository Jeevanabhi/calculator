
const display = document.getElementById("display");

function OpClick(input){

display.value += input;
}


function NumClick(input){
    display.value += input;

}

function Reset(){
   
    display.value= '';

}

function calculate(){
  
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
}
} 