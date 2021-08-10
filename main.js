'use strict';

// let a;

// if (2 > 1) {
//     function showMessage() {
//         a = 'Text';
//     }
// }

// showMessage(); 
// console.log(a);

//====================================================================================================

// //Declaration 
// console.log(sum(1, 5));

// function sum (a, b) {
//     return a + b;
// }

// //Expression


// let sum1 = function (a, b) {
//     return a + b;
// }
// console.log(sum1(3, 7));

//=================================================================================================

// let showMessage = (text, name) => {
//     console.log(`${text}, ${name}!`);
//     if  
//     setTimeout(showMessage, 1000, text, name);
// }

// setTimeout(showMessage, 1000, 'text1','text2');

//===============================================================================================================
  
// OBJECTS

// let makeUserObj = (name, age) => {
//     return {
//         name: name,
//         age: age,
//     }
// }

// let user = makeUserObj('Loh', 32);
 

// Object.assign(user, { city, surname: "Smith"});

// console.log(user);

// let userInfo = {
//     name: 'Loh',
//     age: 33,
//     surname: 'Pedik',
//     address: {
//         city: 'Odessa',
//         street: 19,
//     },
//     showInfo() {
//         let show = () => console.log(`Test ${this.age}: ${this.surname}`);

//         show();
//     },
// }


// userInfo.showInfo();

//CONSTRUCTOR
// function NewUsers(name) {
//     this.name = name;
//     this.years = 24;
// };

// console.log(new NewUsers('Gay'));
// console.log(new NewUsers('Pidar'));



// let testObj = { 
//     age: 33,
//     city: 'Loshara',
// }


// const showObjectKey = (obj) => {
//     for (let key in obj) {
//         console.log(obj[key]);
//     }
// }

// showObjectKey(userInfo);
// showObjectKey(testObj);

// if ("name" in userInfo) {
//     console.log(userInfo.name); 
// }

// console.log(userInfo?.address?.city);

// const isNameInObj = (obj) => {
//     if (obj.name != undefined) {
//         return (obj.name);
//     } 
//     return (`There is not name in Object`);
// }

// console.log(isNameInObj(userInfo));
// console.log(isNameInObj(testObj));

//  let userInfo = {

//  }
 
//  userInfo.name = 'Vasya';
//  console.log(userInfo);

//  userInfo.age = 30;
//  console.log(userInfo);

//  userInfo.name = "Lena";
//  console.log(userInfo);

//  delete userInfo.name; 
//  console.log(userInfo);

// ================================================================================================
//STRING

// let sum = (a, b) => {
//     return a + b;
// }

// console.log(`Sum of 2 numbers: ${sum(4, 8)}!`);

// let numb1 = +(prompt("Type ur 1 number:", '1....1000'));
// let numb2 = +(prompt("Type ur 2 number:", '1....1000'));

// const sumOfNumb = (numb1, numb2) => numb1 + numb2;

// console.log(`Your sum is: ${sumOfNumb(numb1, numb2)}!`); 

// let text = 'фрилансер';

// console.log(text.toUpperCase());
// console.log(text.slice(3, 6));


// let text =  123 + parseInt('456');

// console.log(text);

//=====================================================================================================

//ARRAY

// let arr = ['some.hay', 'text.gda', 'is.adf', 'here?no','hello!yes', 'gay.here',];

// let arr = [1, 5, 7, 10];

// let reduceLearn = arr.reduce(function (previousValue, item, index, array) {
//     return item + previousValue;
// }, 0); 

// arr.forEach()

// for (let items of arr) {
//     console.log(items);
// }

// let str = 'parasa.hu.gavno';

// let someSort = str.split('.', 2);

// console.log(someSort); 

// let learnMap = arr.map(item => item[0]);

// console.log(learnMap);

// console.log(arr.reverse());

// console.log(arr.sort((a, b) => a - b));

// arr.splice(1, 3);
// console.log(arr);

// let arr2 = arr.slice(2, -1);
// console.log(arr2);

// let arr2 = arr.concat();
// console.log(arr2); 

// let arr = [
//     { name: 1, surname: 3, },
//     { name: 2, surname: 4, },
//     { name: 5, surname: 7, },
// ]


// let resultSome = arr.filter(item => item.surname > 3);

// console.log(resultSome);

//=========================================================================================================

// function Users(name) {
//     this.name = name;
//     // this.age = age;
// }; 

// let user = new Users("USERNAME");
// // let userAge = new Users(15);

// console.log(user.name); 
// // console.log(user.age);

// class Age {
//     constructor(age) {
//         this.age = age;
//     }
// }

// let newAge = new Age('15');

// console.log(newAge);

// let testReduce = [
//     {name: "John", age: 16, money: 3200},
//     {name: "Stew", age: 20, money: 4400},
//     {name: "Jannet", age: 32, money: 5000},    
// ];

// const sumMon = testReduce.reduce((total, peoples) => total + peoples.age, 0);
// console.log(sumMon);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//SYMBOL

// let newSymbol = Symbol.for('password');
// let sameSymbol = Symbol.for('login');

// console.log(Symbol.keyFor(newSymbol));
// console.log(Symbol.keyFor(sameSymbol));

// console.log(newSymbol.description);

// let objNames = {
//     name1: 'LFA',
//     name2: 'adsfa',
//     name3: 'kghkf',
// };

// let objAge = {
//     age1: 2,
//     age2: 7,
//     age4: 5,
// };

// let obj3 = Object.assign(objAge, objNames);
// console.log(obj3);

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let camelize = (text) => {
//     let a = text.split('-');
//     return a = text.join('');
// }

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// let a = "background-color";
// let b = "list-style-image";
// let c = "-webkit-transition";

// const camelize = (str) => {
//     return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// }
// console.log(camelize(a));
// console.log(camelize(b));
// console.log(camelize(c));

// const items = [item1, item2, item3, ];
// const copy = [];

// let numbers = ['1', '-3', '6', '32' , '-13', '66', '-51', '45'];
// console.log(numbers);

// let newNumbers = numbers.map(item => parseInt(item));
// console.log(newNumbers);

// let deleteNegative = numbers.filter(item => item < 0);
// console.log(deleteNegative);

// const sortedPositive = (arr) => {
//     let letPositive = arr.filter(item => item > 0);
    
//     return letPositive.sort((a, b) => a - b);
// }

// console.log(sortedPositive(numbers));

// let names = 'John, Andrew, David, Daun';

// let names1 = ['John', 'Andrew', 'Joe', 'David']; 

// const arrToString = (string) => {
//     let newString = string.join(', ');

//     return newString;
// };

// console.log(arrToString(names1));
// const arrOfNames = (array) => {
//     let arr = array.split(', ', 3);
//     return arr;
// }

// console.log(arrOfNames(names));

// let arrNum = [1, 2, 6 ,8, 3, 24, -15, 11];

// let sumOfNums = arrNum.reduce((sum, current) => sum + current, 0);

// console.log(sumOfNums);

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
//ищет в нём элементы между a и b 
//и отдаёт массив этих элементов.
//Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1, 10, 22, 7];

// const filterRange = (array, from, to) => {
//     let finder = array.filter(elem => elem >= from).filter(elem => elem < to);

//     return finder;
// };

// let filtered = filterRange(arr, 3, 10);
// console.log(filtered);
// console.log(arr);

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
// и удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// let arr = [5, 3, 8, 1, 10, 22, 7];

// const filterRangeInPlace = (array, from, to) => {
    

// }

// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// const sortedReverse = (array) => array.sort((a, b) => a - b).reverse();

// console.log(sortedReverse(arr));

// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = (array) => array.concat().sort();

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];
// let names = users.map(item => item.name);

// console.log(users);
// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

// alert( usersMapped[0].fullName);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// const sortByAge = arr.sort( );

// let strings = ["hello", "hello", "харе", "харе",
//   "харе", "харе", "hello", "hello", ":-O"
// ];

// const uniqueArray = strings.filter((item, index) => {

//     return index === strings.indexOf(item);
// });

// console.table(uniqueArray);

// //--------------------------------------------------------------

function unique(array) {
    let uniqueArray = [...new Set(array)];

    return uniqueArray;
}


let arr1 = ['John', 'Namew', 'Dana', 'Petya', 'Vasya',];
let str1 = arr1.toString();
// document.writeln(str1);

const num = prompt('Place ur number', '');


const someFunc = (numbers) => {
    let setArray = [...numbers];

    return setArray.forEach(item => {
        if (item % 2 == 0) {
            return; 
        } 
    });
};

console.log(someFunc(num));

let number = 2.125234;
console.log(number.toFixed(3));


