
// //JavaScript console API(Application Performance Interface)

// // console.log("Hello World");
// //document.write("this is doc write");
// // console.warn("warning");
// // console.error("error");


// //JavaScript variable - container to store data values

// var number1 = 34;
// var number2 = 56;
// // console.log(number1 + number2);


// //Datatypes in JavaScript

// var str1 = "This is a string";
// var str2 = "This is also a string";
// var num1 = 2;
// var num2 = 2.1;
// var marks = {
//     ravi : 10,
//     shubham : 29,
//     harry : 40
// }
// var a = true;
// var b = false;
// // console.log(a,b);

// //function
// //DRY = Do Not Repeat Y0urself
// function avg(a , b){
//     return (a + b)/2;
// }

// c1 = avg(2 , 4);
// c3 = avg(10 , 10);
// c2 = avg(10 , 6);
// // console.log(c1,c3,c2);

// //conditionals in JavaScrpit

// var age = 4;
// if(age>8){
//     console.log("You Are Not A Kid");
// }
// else{
//     console.log("You Are A Kid");
// }

//loops in JavaScript

// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0; i<arr.length;i++){
//     if(i==2){
//         // break;
//         // continue;
//     }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// do {
//     console.log(arr[j]);
//     j++; 
// }while(j<arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];

// // myArr.pop();
// // myArr.push("harry");
// myArr.unshift("harry");
// console.log(myArr);

let myDate = new Date();
console.log(myDate);