/*let helloMessage = '<h1>Hello World</h1>';
alert(helloMessage);

const helloMessage = 'Hello World';
document.write(helloMessage);
console.log(helloMessage); 


const userName=prompt('Plese enter your name');
const helloMessage = 'Hello'+ userName;
let helloMessage = 'Hello World';
alert(helloMessage);
document.write(helloMessage);
console.log(helloMessage); 


let age =Number(prompt('enter you age'));
let nextAge = age + 1;
document.write('Next year you will be' + nextAge);*/
 
/*якого выку користувач*/
 /* let age =Number(prompt('enter you age'));
if (isNaN(age)){
    document.write('plese enter correct number');
} else {
if (age < 40) {
document.write('you are young');
} else {
 document.write('you are not young');
}
} */

/*
let mark =Number(prompt('enter mark'));

let textMark;

switch (mark) {
        case 1:
              textMark = 'Bad';       
        break;
        case 2:
              textMark = 'Average';  
        case 3:   
              textMark = 'Good';   
    default:
            textMark = 'incorrect mark';  
       
}

document.write(textMark);
*/
/*
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

let a=10;
let b=20;
let c = add(a,b);
document.write(c);
document.write('<br>');
let d = 40;
let f = 50;
let g = add(d,f);
document.write(g); */

/*
function add3(num3, num4, num5) {
   let result = num3 + num4 + num5;
    return result;
}

let m=10;
let n=20;
let s=30;
let k = add3(m,n,s);
document.write(k);
function add3 (n2, n2, n3){
    return n1 +n2 + n3;
}
document.write(add3(1,2,3)); */

/*for (var i = 0; i < 10; i=i+1) {
    document.write(i);
    document.write('<br>');
}

for (var i = 9; i >= 0; i=i-1) {
    document.write(i);
    document.write('<br>');
}

for (var i = 9; i >= 0; i--) {
    document.write(i);
    document.write('<br>'); 
} */

/*for (var i = 9; i >= 0; i--) {
    if (i%2==0){
    document.write(i);
    document.write('<br>');
}
}*/


//введення значення від користувача правильне
/* let age;
let correct = false;
while (!correct) {
    age = parseInt(('enter your age'));
    correct = !isNaN(age);
    if (!correct){
        alert('please enter correct age')
    }
    
}

document.write('your age:' + age); */

//let rot =Math.sgrt(16);
//document.write(root);
function calcDiscr(a, b, c) {
    return a*b-c;
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a,b,c);
    if (discr < 0) {
        return "no roots";
    }
    return 'x1 ='+x1 +',x2=' +x2;
    
    // body...
}
var a=parseInt();
var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);

document.write(result);