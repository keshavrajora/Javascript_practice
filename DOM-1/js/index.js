// // // selector
// // // id-trageg, class-traget, element-traget


// // // id // //

// let a = document.getElementById('p1');


// // // class // //

// let b = document.getElementsByClassName('c1')[1];


// // // element // //

// let c = document.getElementsByTagName('p')

// // //  existing fetch // //

// // // innerText // //

// let d = document.getElementById('p2').innerText

// // // replace kr do js ke output ke sat

// let e = document.getElementById('p3').innerText = 'nanni';

// // // append // //

// let f = document.getElementById('p4').innerText += ' nanni';


// let x = 3;
// let y = 6;
// let z = x + y;

// let g = document.getElementById('p5').innerText = 'Sum of two number is ' + z;

// // // button // //

// function handleincreement() {
//     x = x + 1
//     document.getElementById('p6').innerText = x;
// }
// function handledec() {
//     x = x - 1
//     document.getElementById('p6').innerText = x;
// }

// // // innerHtml // //

// let x = 0;
// function handleincreement() {
//     x = x + 1
//     document.getElementById('output').innerHTML = x
// }
// function handledecreement() {
//     x = x - 1
//     document.getElementById('output').innerText = x
// }

// // attributes // //

// function handleshow(){
//     let a=document.getElementById('pass').attributes[0].value='text'
// }
// function handleimg(){
// let a = document.querySelectorAll('#p,.c2,p,img')[0].attributes[0].value='chat.png'
// console.log(a);
// }

// // img ceng // //

// let a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value
// function handleimg() {
//     if (a == "logo.png") {
//         a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value = 'chat.png'
//     } else if (a == "chat.png") {
//         a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value = 'fb.png'
//     } else if (a == "fb.png") {
//         a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value = 'html.png'
//     } else if (a == "html.png") {
//         a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value = 'tw.png'
//     } else {
//         a = document.querySelectorAll('p, img, #p6, .c1')[0].attributes[0].value = 'logo.png'
//     }
//     console.log(a);
// }

// // body color chang // //

// let a = document.body.style.background
//     function handleimg() {
//       if (a == "green") {
//         a = document.body.style.background = 'red'
//       } else if (a == "red") {
//         a = document.body.style.background = 'pink'
//       } else if (a == "pink") {
//         a = document.body.style.background = 'purple'
//       } else if (a == "purple") {
//         a = document.body.style.background = "orange"
//       } else {
//         a = document.body.style.background = 'green'
//       }
//       console.log(a);
//     }


// // div colors change // //

// let a = document.getElementById('a1').style.background;
// let b = document.getElementById('a2').style.background;
// function handleimg() {
//   if (a == "orange") {
//     a = document.getElementById('a1').style.background = 'pink'
//   } else if (a == "pink" && b == "orange") {
//     a = document.getElementById('a1').style.background = 'yellow'
//     b = document.getElementById('a2').style.background = 'pink'
//   } else if (a == 'yellow' && b == 'pink') {
//     a = document.getElementById('a1').style.background = 'green'
//     b = document.getElementById('a2').style.background = 'yellow'
//   } else if (a == 'green' && b == 'yellow') {
//     a = document.getElementById('a1').style.background = 'aqua'
//     b = document.getElementById('a2').style.background = 'green'
//   } else {
//     a = document.getElementById('a1').style.background = 'orange'
//     b = document.getElementById('a2').style.background = 'orange'
//   }
// }

// //  addEventListener  // //

// function handlesum(){
//     alert("hello")
//   }
// document.getElementById("btn").addEventListener('click', handlesum)

// // arrow function // //

// function handlesum(a, b) {
//     alert(a + b)
// }
// document.getElementById("btn").addEventListener('click', () => { handlesum(5, 6) })


let a= document.getElementById("output").innerHTML="hello nanni and keshav" 