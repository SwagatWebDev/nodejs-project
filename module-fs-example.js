const mathModule = require('./mathModule.js')
const fs = require('fs');
// import {add} from "./mathModule.js";
// import {subtract} from "./mathModule.js";

// Module in NodeJS
// import {add, subtract} from "./mathModule.js";

const resultAdd = mathModule.add(5, 3);
const resultSubtract = mathModule.subtract(8, 3);

console.log(resultAdd);
console.log(resultSubtract);

// File Handling in NodeJS
// Reading


console.log("a");
// fs.readFile('contacts.txt', 'utf8', (err, data) => {
//     if(err){
//        console.log(err);
//        return;
//     }
//     console.log(data);
// });

const fileContent = fs.readFileSync('contacts.txt', 'utf8');
console.log(fileContent);

console.log("b");
console.log("c");


// // Update File Content
const oldContent = "Mobile-1: 9090909090";
const newContent = "Phone-1: 9090909090";
// fs.readFile('contacts.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     } else {
//         const updatedContent = data.replace(oldContent, newContent);
//         fs.writeFile('contacts.txt', updatedContent, (Err)=> {
//             if(Err){
//                 console.log("File not updated");
//             }else {
//                 console.log("File Updated");
//             }
//         })
//     }
// });
// //
// // // Writing File
//
// const contentToWrite = "Mobile: 0672436455"
// fs.writeFile('contacts.txt', contentToWrite, 'utf8', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     if(fs.existsSync('contacts.txt')) {
//         console.log("File has been written Successfully");
//     } else {
//         console.log("File not exists");
//     }
// })
