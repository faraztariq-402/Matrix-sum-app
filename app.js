function sum(){
let number1 = document.getElementById('box1').value;
number1 = Number(number1);
let number2 = document.getElementById('box2').value;
number2 = Number(number2);
let number3 = document.getElementById('box3').value;
number3 = Number(number3);
let number4 = document.getElementById('box4').value;
number4 = Number(number4);
let number5 = document.getElementById('box5').value;
number5 = Number(number5);
let number6 = document.getElementById('box6').value;
number6 = Number(number6);
let number7 = document.getElementById('box7').value;
number7 = Number(number7);
let number8 = document.getElementById('box8').value;
number8 = Number(number8);
let number9 = document.getElementById('box9').value;
number9 = Number(number9);

let number10 = document.getElementById('box10').value;
number10 = Number(number10);
let number11 = document.getElementById('box11').value;
number11 = Number(number11);
let number12 = document.getElementById('box12').value;
number12 = Number(number12);
let number13 = document.getElementById('box13').value;
number13 = Number(number13);
let number14 = document.getElementById('box14').value;
number14 = Number(number14);
let number15 = document.getElementById('box15').value;
number15 = Number(number15);
let number16 = document.getElementById('box16').value;
number16 = Number(number16);
let number17 = document.getElementById('box17').value;
number17 = Number(number17);
let number18 = document.getElementById('box18').value;
number18 = Number(number18);

let firstArray = [number1,number3,number5,number7,number9,number11,number13,number15,number17];
let secondArray = [number2,number4,number6,number8,number10,number12,number14,number16,number18];

let finalResult = firstArray[0] + secondArray[0];
let finalResult2 = firstArray[1] + secondArray[1];
let finalResult3 = firstArray[2] + secondArray[2];
let finalResult4 = firstArray[3] + secondArray[3];
let finalResult5 = firstArray[4] + secondArray[4];
let finalResult6 = firstArray[5] + secondArray[5];
let finalResult7 = firstArray[6] + secondArray[6];
let finalResult8 = firstArray[7] + secondArray[7];
let finalResult9 = firstArray[8] + secondArray[8];


 document.getElementById('finalResult').value = finalResult;
 document.getElementById('finalResult2').value = finalResult2;
 document.getElementById('finalResult3').value = finalResult3;
 document.getElementById('finalResult4').value = finalResult4;
 document.getElementById('finalResult5').value = finalResult5;
 document.getElementById('finalResult6').value = finalResult6;
 document.getElementById('finalResult7').value = finalResult7;
 document.getElementById('finalResult8').value = finalResult8;
 document.getElementById('finalResult9').value = finalResult9;





}
sum();