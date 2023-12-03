//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleSquare = (a, b) => a * b;
console.log(rectangleSquare(10, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSquare = (r) => Math.round(Math.PI * Math.pow(r, 2));
console.log(circleSquare(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSquare = (h, r) => Math.round(2 * Math.PI * r * (h + r));
console.log(cylinderSquare(10, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayPrinter = (array) => {
    for (const element of array) {
        console.log(element);
    }
}
const array = [1, "hello", 3, true, "okten", 6, "owu", false, "com", 0];
arrayPrinter(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraphWithText = (text) => document.write(`<div><p>${text}</p></div>`);
createParagraphWithText("Some Text");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (text) => {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
list("Some text");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listWithFixedLi = (text, numerOfLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < numerOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
listWithFixedLi("Another text", 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listFromArray = (array) => {
    document.write(`<ul>`);
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
listFromArray(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
let userPrinter = (array) => {
    document.write(`<div>`);
    for (const element of array) {
        document.write(`<div class="user-box">`);
        for (const key in element) {
            document.write(`<p>${key}: ${element[key]}</p>`)
        }
        document.write(`</div>`);
    }
    document.write(`</div>`);
}
userPrinter(users);
// - створити функцію яка повертає найменьше число з масиву
const intArray = [45, 5, 29, 17, 3, 96, 63, 17, 2, 72];

let smallestIntInArray = (array) => {
    let smalletInt = array[0];
    for (let i = 1; i < array.length; i++) {
        if (smalletInt > array[i]) {
            smalletInt = array[i];
        }
    }
    return smalletInt;
}
console.log(smallestIntInArray(intArray));;
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArray = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}
console.log(sumArray(intArray));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (array, index1, index2) => {
    const buffer = array[index1];
    array[index1] = array[index2];
    array[index2] = buffer;
    return array;
}
console.log(swap(array, 2, 4));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValue, exchangeCurrency) => {
    for (const element of currencyValue) {
        if (element.currency === exchangeCurrency) {
            return (sumUAH / element.value).toFixed(2);
        }
    }
}
console.log(exchange(1000, [{currency: 'USD', value: 40.21}, {currency: 'EUR', value: 42}], "USD"));;