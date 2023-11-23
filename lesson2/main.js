//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, 2, 0, "hello", "okten", "owu", true, false, "vasya", "ivan"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
let a = 0;
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let hobbit = {title: "The Hobbit", pageCount: 320, genre: "Fantasy"};
let animalFarm = {title: "Animal Farm", pageCount: 120, genre: "Antiutopia"};
let macbeth = {title: "Macbeth", pageCount: 191, genre: "Classic"};
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let firstBook = {title: "Some title for first book", pageCount: 159, genre: "Roman", authors: [{name: "FistName", age: 56}, {name: "F_Name", age: 34}]};
let secondBook = {title: "Some title for second book", pageCount: 259, genre: "Fantacy", authors: [{name: "AnotherName", age: 26}, {name: "SomeName", age: 22}, {name: "Name", age: 63}]};
let thirdBook = {title: "Some title for third book", pageCount: 343, genre: "Classic", authors: [{name: "SomeName", age: 59}]};
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let usersArray = [
    {name: "ivan", username: "vanya", password: "vanya123"},
    {name: "yuri", username: "yura", password: "yura123"},
    {name: "vasyl", username: "vasya", password: "vasya123"},
    {name: "oleksandr", username: "sasha", password: "sasha123"},
    {name: "yaroslav", username: "slavik", password: "slavik123"},
    {name: "viktoria", username: "vika", password: "vika123"},
    {name: "oksana", username: "ksusha", password: "ksusha123"},
    {name: "daria", username: "dasha", password: "dasha123"},
    {name: "tetania", username: "tania", password: "tania123"},
    {name: "maria", username: "masha", password: "masha123"},
]
console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);
//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0;
if (a != 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 5;
if (time > -1 && time < 15) {
    console.log("Перша четвертина години");
} else if (time > 14 && time < 30) {
    console.log("Друга четвертина години");
} else if (time > 29 && time < 45) {
    console.log("Третя четвертина години");
} else if (time > 44 && time < 60) {
    console.log("Четверта четвертина години");
} else {
    console.log("Не відповідне число");
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 6;
if (day > 0 && day < 11) {
    console.log("Перша декада");
} else if (day > 10 && day < 21) {
    console.log("Друга декада");
} else if (day > 20 && day < 32) {
    console.log("Третя декада");
} else {
    console.log("Не відповідне число");
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberOfDay = 8;
switch (numberOfDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thuesday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number of day");
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter sebond number");
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log("Numbers are equals to each other")
}
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = 0;
if (!x) {
    x = "default"
}
console.log(x);
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}
