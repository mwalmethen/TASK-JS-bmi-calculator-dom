function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  
  const BMI = (weight / ((height /100) * (height /100))); // BMI Calculator  
  alert(BMI); // Showing result as an alert 

  // Challenge 2 //
  /* if (BMI < 18.5) alert("Your Underweight"); 
 else if (BMI >= 18.5 && BMI <= 25.0)  alert("Healthy Weight"); 
 else if (BMI >= 25.0 && BMI < 30.0) alert("Overweight");
 else if  (BMI > 30.0) alert("Above Obesity"); */ 


 // Challenge 3 // 
 if (BMI >= 19 && BMI < 24 && age >= 19 && age < 24 ) {
  alert("Healthy!");
 } else if(BMI >= 20 && BMI < 25 && age > 25 && age < 34) {
  alert("Healthy!");
} else if(BMI >= 21 && BMI < 26 && age > 35 && age < 44) { 
  alert("Healthy!");
} else if(BMI >= 22 && BMI < 27 && age > 45 && age < 54) {
  alert("Healthy!");
} else if(BMI >= 23 && BMI < 28 && age > 55 && age < 64) { 
  alert("Healthy!");
} else if(BMI >= 24 && BMI < 29 && age > 65) { 
alert("Healthy!");
} else alert("Not Healthy!")
} 
