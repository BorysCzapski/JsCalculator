const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');
const calculator = document.querySelector('.calculator');
var eqal = document.getElementById('equals');

var mode = document.querySelector('#mode')
var del = document.querySelector('#del')
let isDark = true;

let calculation = [];
let acumulate;
function calculate(button){
  const value = button.textContent;
  if (value === "C"){
    calculation = [];
    screenDisplay.textContent = ".";
  } 
  else if (value === "="){
    
    screenDisplay.textContent = eval(acumulate);
    calculation = [];
    
      
  } 
  else if (value === "<"){
    if (screenDisplay.textContent.length > 1){
    screenDisplay.textContent = screenDisplay.textContent.substring(0, screenDisplay.textContent.length - 1);
    calculation.pop();
    acumulate = "";
  acumulate += screenDisplay.textContent
console.log(acumulate)}
    else{
      screenDisplay.textContent = ".";
      calculation = [];
    }
  }
  
  else if(value === "L"){
    
    console.log(isDark)
    calculator.classList.toggle('dark')
    screenDisplay.classList.toggle('dark-lcd')
    buttons.forEach(button => button.classList.toggle('dark-btn'));
    mode.classList.toggle('dark-btn')
    
    
    
    
  }
  else{
  calculation.push(value)
  console.log(calculation)
  acumulate = calculation.join('')
  console.log(acumulate)
  screenDisplay.textContent = acumulate;
  console.log(calculation)
  }
}
buttons.forEach(button => button.addEventListener("click",() => calculate(button) ))
