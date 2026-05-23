//Student Information
var studentName= "Mr. X";
var age="20";
var courseName= "Sociology";
var isEnrolled= true;

document.getElementById("sName").innerHTML= studentName;
document.getElementById("age").innerHTML= age;
document.getElementById("courseName").innerHTML= courseName;
document.getElementById("isEnrolled").innerHTML= isEnrolled;
//Student Information Ends

//Calculator
var num1=10;
var num2=15;
var add=num1+num2;
var sub=num2-num1;
var multi=num1*num2;
var division=num2/num1;

document.querySelector("#add").innerHTML= add;
document.querySelector("#sub").innerHTML= sub;
document.querySelector("#multi").innerHTML= multi;
document.querySelector("#division").innerHTML= division;

//End of calculator

//Loop
var one_to_ten;

for(one_to_ten=1; one_to_ten<11; one_to_ten++){
   document.getElementById("for-loop").textContent+= one_to_ten + " ";
}


var ten_to_one=10;
while(ten_to_one>=1){
   document.getElementById("while-loop").textContent+= ten_to_one + " ";
   ten_to_one--;
}
// end of loop

// function

function helloWorld(){
   return "Hello World";
}

document.querySelector("#callFunction").textContent= helloWorld();

//end of function