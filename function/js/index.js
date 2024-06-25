// let a = 5;
// function keshav() {
//     console.log(a);
// }
// keshav();

// let b = 4;

// let yash = function () {
//     console.log(b);
// }

// yash();

// // // button

// function handlename() {
//     console.log('hello');
// }

// // // button

// function handleform() {
//     prompt('Enter your Name')
// }

// function hanldesum(a, b) {
//     let output = a + b
//     console.log(output);
// }

// hanldesum(223, 1);
// hanldesum(433, 1);

// // uzr se value lene ke liye

// function value() {
//     let a = prompt('Enter first value');
//     let b = prompt('Enter second value');
//     let output = Number(a) + Number(b)
//     console.log(output);
// }
// value();

function handlevotereli() {
    let birthyear = prompt('Enter your Birth Year')
    let currenyyear = 2024
    let c = currenyyear - birthyear
    console.log(c);
    if (c >= 18) {
        alert("your are eligible for voter Id");
    } else {
        alert
            ("your are not eligoble for voter Id");
    }
}

// function handledelete() {
//     let respose = confirm('Please click on ok to delete permanent')
//     console.log(respose);
//     if (respose) {
//         console.log("deleting....");
//     } else {
//         console.log("no deleting.....");
//     }
// }

// // // agr muje function ko bar-bar run krne ke liye setInterval(value,1000); us krte h .

// let c = function () {
//     alert("hello")
// }
// setInterval(c, 3000);

// // // agr muje function ko ek bar run krnr ke liye setTimeOut(value,1000); us krte h .

// let d = function () {
//     alert("hi..")
// }
// setTimeout(d, 3000);

// // * scope
// // 1 global , 2 local , 3 block,

// // // local-- is variable ko function ke andr bna te h .

// // function name(){
// //     let a='keshav'
// // }
// // console.log(a);
// // name();

         // // * or return 
         // // return last line of function

// function handlesum(a,b){
//     let c=a+b;
//     return c
// }

// let output=handlesum(50,100);
// console.log(output);


// // // global-- is variable me function ke bar value bnate h.

// let e = 'keshav';
// function name() {
//     console.log(e);
// }   
// name();


// let a = 0;
// function handleincremnt() {
//     a = a + 1
//     console.log(a);
// }

// function handledecremnt() {
//     a = a - 1
//     console.log(a);
// }

// // // block

// let h = 'rajora';
// if (h == 'rajora') {
//     var i = 5
// }
// console.log(i);

// Define a function named reverse_a_number that takes a parameter n
// function reverse_a_number(n)
// {
//     // Convert the input number to a string
//     n = n + "";

//     // Split the string into an array of characters, reverse the array, and then join the characters back into a string
//     return n.split("").reverse().join("");
// }

// // Convert the reversed string back to a number and log it to the console
// console.log(Number(reverse_a_number(32243)));
