//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log
let s1 = "hello";
let s2 = "owu";
let s3 = "com";
let s4 = "ua";
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let f1 = 3.14;
let f2 = 2.7;
let n5 = 16;
let bool1 = true;
let bool2 = false;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(f1);
console.log(f2);
console.log(n5);
console.log(bool1);
console.log(bool2);
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Юрій";
let middleName = "Юрійович";
let lastName = "Свида";
let person = firstName + " " + middleName + " " + lastName;
console.log(person);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
firstName = prompt("Вкажіть своє ім'я");
lastName = prompt("Вкажіть своє прізвище");
age = prompt("Вкажіть свій вік");
console.log(`Привіт. Мене звати ${firstName} ${lastName}. Мені ${age} роки`);
