// 12-3 what is variable, declare a variable, see output

var bananaPrice = 10;
console.log(typeof bananaPrice);


var motherName = 'Mohammad Abdullah';
console.log(typeof motherName);

// 12-4 variable type, Numberic, String, Boolean

var booleans = false;
var booleans = true;
console.log(typeof booleans);

// 12-5 variable name naming Convention and best practice 

var myName = 'Mohammad Abdullah';

// 12-6 explore string case change index, split

var promise = 'I promise i will work hard to become a programmer';
console.log(promise.toUpperCase());

var promise2 = 'I promise i will work hard ot become a programmer';
console.log(promise2.toLocaleLowerCase());

var index = 'i promise i will work hard i become a programmer';
console.log(index.indexOf('promise'));

var promise = 'I will work hard i become a programmer';
console.log(promise.split('work'));

// 12-7 integer float parseInt parseFloat type conversion

var number1 = 50;
var number2 = '50.50';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number3 = 100;
var number4 = 10.50;
number4 = '' + number4;
console.log(typeof number4);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(4);
console.log(total);

//12 - 8 Mathematical operations in javascript

var price1 = 25;
var price2 = 25;
var total = price1 + price2;
console.log(total);

var price3 = 100;
var price4 = 100;
var total = price3 + price4;
console.log(total);

var price5 = 200;
var price6 = 20;
var total = price5 - price6;
console.log(total);

var price7 = 50;
var price8 = 5;
var total = price7 * price8;
console.log(total);

var price0 = 100;
var price9 = 53;
var total = price0 / price9;
total = total.toFixed(3);
console.log(total);


var number1 = 234;
var number2 = 24;
var total = number1 % number2;
console.log(total);

var number3 = 25;
var number4 = 25;
number4++;
console.log(number4);


var name1 = 'Mohammad';
var name2 = 'Abdullah';
var result = name1 + ' ' + name2;
console.log(result);

// 12-9 Math absolute round floor celi random

var number1 = -5.43432;
var absoluteNumber = Math.abs(number1);
console.log(absoluteNumber);

var num = -2.2222;
console.log(num);

var num2 = 10.466;
var result = Math.round(num2);
console.log(result);


var num1 = 50.1111;
var result = Math.ceil(num1);
console.log(result);

var num3 = 50.99999;
var result = Math.floor(num3);
console.log(result);


var num = 10.834232;
var result = Math.floor(num);
console.log(result);


var num4 = Math.random() * 100;
var result = Math.round(num4);
console.log(result);


// 12- 10 Make conditional decision, if else, comparison

var biscuitPrice = 2;
if(biscuitPrice < 10){
    console.log('I will eat the biscuit');
    
}
else{
    console.log('bread is better then biscuits');
    
}


var smokePrice = 10;
if(smokePrice == 10){
    console.log('i will eat the chiggrate');
    
}
else{
    console.log(`i can't smoke the chigareat`);
    
}

var biscuitPrice = 10;
if (biscuitPrice != 10) {
    console.log('I will eat the biscuit');
    
}
else{
    console.log('Bread is better then biscuit');
    
}


// 12- 11 Multiple conditions, fulfill both condition, else if

// var job = true;
// var savingAmount = 5000;
// if(job == true && savingAmount > 500000){
//     console.log('Asho tmr jonno patri khuji');
    
// }
// else if(job == true){
//     console.log('Acha koiek din por dheka shuru korbo');
    
// }

// else{
//     console.log('Tur kopale biye nai bab');
    
// }

var earning = true;
var jobSalary = 50000;
if(earning == true && jobSalary > 50000000){
    console.log('Asho Tmr jonno bow deki');
    
}
else{
    console.log('Tur koplae biye nai');
    
}

// 12-12 Javascript Date timeZone and Module summery

var date = new Date().toDateString();
console.log(date);


