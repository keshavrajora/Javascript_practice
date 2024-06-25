// // // ['keshav',88,'jangid'];
// // // key - 0,1,2,3,4,...
// // // its a combination of values and keys
// // // non primative

// let a = ['keshav', 88, 'jangid'];
// console.log(a[0]);

// // // array ki total values ni kal neke liye .lenggth property ka us hota h.

// let b = ['kittu', 33, 'jangid'];
// console.log(b.length);

// // // end me values add krne ke liye phus('value'); ka us krte h.

// let c = ['yash', 22, 'jangid'];
// c.push('rajora');
// console.log(c);

// // // end ki values ko remove krne ke liye pop(); ka us krte h.

// let d = ['bittu', 66, 'jangid'];
// d.pop();
// console.log(d);

// // // starting me values add krne ke liye unshift('value'); ka us krte h.

// let e = ['tanu', 65, 'jangid'];
// e.unshift('rajora');
// console.log(e);

// // // starting me values ko remove krne ke liye shift(); ka us krte h.

// let f = ['lilly', 55, 'jnagid'];
// f.shift();
// console.log(f);

// // // array ki kohi si bhi key ko dikhane ke liye splice(key number) ka us hota h.

// let g = ['mona', 34, 'hema', 'lema', 23, 'kema'];
// g.splice(1, 4);
// console.log(g);

// // // array me for in loop ki sayta se total value nikal ne ka tri ka.

// let i = ['tony', 99, 88, 77, 66, 55, 'pitr'];
// for (let k in i) {
//     console.log(i[k]);
// }

// let j = [6, 9, 8, 100];
// for (let k in j) {
//     let mutiple = 5

//     console.log(j[k] * mutiple);
// }


// let a = [6, 5, 4, 100];
// let b = []
// for (let k in a) {
//     let mutiple = 5

//     b.push(a[k] * mutiple)
//     // console.log(b);
// }

// console.log(b);

// let a = [6, 9, 8, 100];
// let mutiple = 100;
// let b = [];
// // // key - 0,1,2,3
// for (let k in a) {
//     console.log(a[k] * mutiple);
//     b.unshift(a[k * mutiple])
// }
// console.log(b);


// let a = [1, 1, 2, 3, 1, 2, 3, 2, 3]
// let x = []
// let y = []
// let z = []
// for (let key in a) {
//     if (a[key] == 1) {
//         x.push(a[key])
//     } else if (a[key] == 2) {
//         y.push(a[key])
//     } else {
//         z.push(a[key])
//     }
// }
// console.log(x);
// console.log(y);
// console.log(z);

   // // array for loop // //
   let x = [1,2,3,4,34,34]
   for(let h in x){
    console.log(h);
   }

   


// const age = [10, 22, 43, 12, 12];
// const student = age.filter((x)=>{
//     return x >= 18;
// })

// console.log(student);