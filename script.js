 function calculateBMI(){

let height = document.getElementById("height").value / 100;
let weight = document.getElementById("weight").value;

let bmi = weight / (height * height);

document.getElementById("bmiResult").innerText =
"Your BMI is " + bmi.toFixed(1);

}



function calculateCalories(){

let weight = document.getElementById("weightCal").value;
let time = document.getElementById("time").value;

let calories = weight * 0.14 * time;

document.getElementById("caloriesResult").innerText =
"You burned " + calories.toFixed(0) + " calories 🔥";

}
// list
function toggleMenu(){

let menu = document.getElementById("navLinks");

menu.classList.toggle("show");

}

function calculateCalories(){

let weight = document.getElementById("weight").value;
let time = document.getElementById("time").value;

let calories = weight * 0.14 * time;

document.getElementById("caloriesResult").innerText =
"You burned approximately " + calories.toFixed(0) + " calories 🔥";

}

