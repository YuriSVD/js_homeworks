//--створити масив з:
// - з 5 числових значень
let arrNumber = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let arrString = ["Vasya", "Petya", "Olya", "Vika", "Dasha"];
// - з 5 значень стрічкового, числового та булевого типу
let arr = [1, "hello", 15, true, "wprld"];
// - та вивести його в консоль
console.log(arrNumber);
for (const number of arrNumber) {
    console.log(number);
}
console.log(arrString);
for (const string of arrString) {
    console.log(string);
}
console.log(arr);
for (const element of arr) {
    console.log(element);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[array.length] = "hello";
array[array.length] = 34;
array[array.length] = false;
array[array.length] = 95;
array[array.length] = "world";
console.log(array);
for (const element of array) {
    console.log(element);
}
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let intArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < intArr.length) {
    console.log(intArr[i]);
    i++;
}
// 2. перебрати його циклом for
for (const number of intArr) {
    console.log(number);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < intArr.length) {
    if (i % 2 !== 0) {
        console.log(intArr[i]);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < intArr.length; j++) {
    if (j % 2 == 1) {
        console.log(intArr[j]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < intArr.length) {
    if (intArr[i] % 2 == 0) {
        console.log(intArr[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of intArr) {
    if (number % 2 == 0) {
        console.log(number);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < intArr.length; j++) {
    if (intArr[j] % 3 == 0) {
        intArr[j] = "okten"
    }
}
// 8. вивести масив в зворотньому порядку.
for (let j = intArr.length - 1; j >= 0; j--) {
    console.log(intArr[j]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let anotherArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = anotherArr.length - 1;
while (i >= 0) {
    console.log(anotherArr[i]);
    i--;
}
for (let j = anotherArr.length - 1; j >= 0; j--) {
    console.log(anotherArr[j]);
}
i = anotherArr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(anotherArr[i]);
    }
    i--;
}
for (let j = anotherArr.length - 1; j >= 0; j--) {
    if (j % 2 == 1) {
        console.log(anotherArr[j]);
    }
}
i = anotherArr.length - 1;
while (i >= 0) {
    if (anotherArr[i] % 2 == 0) {
        console.log(anotherArr[i]);
    }
    i--;
}
for (let j = anotherArr.length - 1; j >= 0; j--) {
    if (anotherArr[j] % 2 == 0) {
        console.log(anotherArr[j]);
    }
}
for (let j = anotherArr.length - 1; j >= 0; j--) {
    if (anotherArr[j] % 3 == 0) {
        anotherArr[j] = "okten";
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let integerArrat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of integerArrat) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArray = ["vasya", "petya", "vika", "olya", "misha", "nadia", "vanya", "yura", "diana", "dasha"];
for (const string of stringArray) {
    console.log(string);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anythingArray = ["hello", 2, true, "aloha", 45, "hi", false, 34, 23, "konichiwa"];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const element of anythingArray) {
    if (typeof element === "boolean") {
        console.log(element);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const element of anythingArray) {
    if (typeof element === "number") {
        console.log(element);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const element of anythingArray) {
    if (typeof element === "string") {
        console.log(element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArr = [];
emptyArr[emptyArr.length] = "hello";
emptyArr[emptyArr.length] = 1;
emptyArr[emptyArr.length] = true;
emptyArr[emptyArr.length] = "okten";
emptyArr[emptyArr.length] = false;
emptyArr[emptyArr.length] = 2;
emptyArr[emptyArr.length] = "owu";
emptyArr[emptyArr.length] = 3;
emptyArr[emptyArr.length] = "com";
emptyArr[emptyArr.length] = 4;
for (const element of emptyArr) {
    console.log(element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j += 2) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 1; j <= 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(`<div>${j}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(`<div>${j}</div>`)
    }
}
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let booksArray = [
    {title: "Book Title", pages: 312, authors: ["Author Name"], genres: ["Horor"]},
    {title: "Another Book Title", pages: 229, authors: ["Author Name", "Another Name"], genres: ["Fantacy", "Action", "Roman"]},
    {title: "Very Long Book Title", pages: 129, authors: ["Some Name", "SomeAuthor Name"], genres: ["Historic"]},
    {title: "Big Book", pages: 1129, authors: ["Some Name", "Another Name", "Other Name"], genres: ["Adventure"]},
    {title: "Some Book", pages: 422, authors: ["Some Name"], genres: ["Some"]}
]
// -знайти наібльшу книжку.
let biggestBook = booksArray[0];
for (const book of booksArray) {
    if (biggestBook.pages < book.pages) {
        biggestBook = book;
    }
}
console.log(biggestBook.title);
// - знайти книжку/ки з найбільшою кількістю жанрів
let biggestGenresBooksArr = [];
let biggestGenresBook = booksArray[0];
for (const book of booksArray) {
    if (biggestGenresBook.genres.length < book.genres.length) {
        biggestGenresBook = book;
    }
}
for (const book of booksArray) {
    if (biggestGenresBook.genres.length === book.genres.length) {
        biggestGenresBooksArr[biggestGenresBooksArr.length] = book;
    }
}
console.log(biggestGenresBooksArr);
// - знайти книжку/ки з найдовшою назвою
let longestTitleBookArr = [];
let longestTitleBook = booksArray[0];
/*for (const book of booksArray) {
    if (longestTitleBook.title.length < book.title.length) {
        longestTitleBook = book;
    }
}
for (const book of booksArray) {
    if (longestTitleBook.title.length === book.title.length) {
        longestTitleBookArr[longestTitleBookArr.length] = book;
    }
}
console.log(longestTitleBookArr);*/
for (const book of booksArray) {
    if (longestTitleBook.title.length < book.title.length) {
        longestTitleBook = book;
        longestTitleBookArr = [];
        longestTitleBookArr[longestTitleBookArr.length] = book;
    } else if (longestTitleBook.title.length === book.title.length) {
        longestTitleBookArr[longestTitleBookArr.length] = book;
    }
}
console.log(longestTitleBookArr);
// - знайти книжку/ки які писали 2 автори
let twoAuthorsBook = [];
for (const book of booksArray) {
    if (book.authors.length === 2) {
        twoAuthorsBook[twoAuthorsBook.length] = book;
    }
}
console.log(twoAuthorsBook);
// - знайти книжку/ки які писав 1 автор
let singleAuthorsBook = [];
for (const book of booksArray) {
    if (book.authors.length === 1) {
        singleAuthorsBook[singleAuthorsBook.length] = book;
    }
}
console.log(singleAuthorsBook);