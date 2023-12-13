//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.createElement("form");
const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "enter name";
inputName.name = "userName";
const inputSurname = document.createElement("input");
inputSurname.type = "text";
inputSurname.placeholder = "enter surname";
inputSurname.name = "userSurname";
const inputAge = document.createElement("input");
inputAge.type = "number";
inputAge.placeholder = "enter age";
inputAge.name = "userAge";
const button = document.createElement("button");
button.innerText = "Create user";
button.onclick = function (ev) {
    ev.preventDefault();
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.innerText = `${inputName.value} ${inputSurname.value}`;
    p.innerText = `${inputAge.name}: ${inputAge.value} year`;
    div.append(h3, p);
    document.body.appendChild(div);
};
form.append(inputName, inputSurname, inputAge, button);
document.body.appendChild(form);
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
if (!localStorage.getItem("numberOfSessions")) {
    localStorage.setItem("numberOfSessions", 0);
}
localStorage.setItem("numberOfSessions", +localStorage.getItem("numberOfSessions") + 1);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
/*if (!localStorage.getItem("sessions")) {
    localStorage.setItem("sessions", JSON.stringify([]));
}
let sessions = JSON.parse(localStorage.getItem("sessions"));
sessions.push(new Date());
localStorage.setItem("sessions", JSON.stringify(sessions));
localStorage.setItem("session", JSON.stringify([]));
let session = JSON.parse(localStorage.getItem("session"));
window.onmousemove = function (ev) {
    session.push({coordX: ev.clientX, coordY: ev.clientY});
    localStorage.setItem("session", JSON.stringify(session));
};*/
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const array = [];
for (let i = 0; i < 100; i++) {
    array.push({id:i+1});
}
let fistElement = 0;
let numberOfList = document.createElement("p");
numberOfList.setAttribute("id", "numberOfList");
numberOfList.innerText = 1;
const div = document.createElement("div");
div.setAttribute("id", "paginationDiv");
document.body.append(div);
const pagination = (array, fist, last) => {
    console.log(fist);
    console.log(last);
    const paginationDiv = document.getElementById("paginationDiv");
    paginationDiv.innerHTML = "";
    for (fist; fist < last; fist++) {
        const p = document.createElement("p");
        p.innerText = array[fist].id;
        paginationDiv.appendChild(p);
    }
    fistElement = fist;
}
pagination(array, fistElement, fistElement + 10);
const prev = document.createElement("button");
const next = document.createElement("button");
prev.innerText = "prev";
prev.disabled = true;
next.innerText = "next";
next.onclick = function (ev) {
    ev.preventDefault();
    pagination(array, fistElement, fistElement + 10);
    if (fistElement != 0) {
        prev.disabled = false;
    }
    let elementById = document.getElementById("numberOfList");
    let number = +elementById.innerHTML + 1;
    elementById.innerText = number;
    number < array.length / 10 ? next.disabled = false : next.disabled = true;
}
prev.onclick = function (ev) {
    ev.preventDefault();
    pagination(array, fistElement - 20, fistElement - 10);
    if (fistElement < array.length) {
        next.disabled = false;
    }
    let elementById = document.getElementById("numberOfList");
    let number = +elementById.innerHTML - 1;
    elementById.innerText = number;
    number > 1 ? prev.disabled = false : prev.disabled = true;
}
document.body.append(prev, numberOfList, next);
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const tableForm = document.createElement("form");
const numbersOfLines = document.createElement("input");
numbersOfLines.type = "number";
numbersOfLines.placeholder = "enter number of lines"
const numbersOfColums = document.createElement("input");
numbersOfColums.type = "number";
numbersOfColums.placeholder = "enter number of colums";
const textInTable = document.createElement("input");
textInTable.type = "text";
textInTable.placeholder = "enter text";
const buttonTable = document.createElement("button");
buttonTable.innerText = "Create table";
buttonTable.disabled = true;
tableForm.append(numbersOfLines, numbersOfColums, textInTable, buttonTable);
document.body.appendChild(tableForm);
tableForm.addEventListener("input", function (ev) {
    numbersOfLines.value && numbersOfColums.value && textInTable.value ? buttonTable.disabled = false : buttonTable.disabled = true;
})
buttonTable.onclick = function (ev) {
    ev.preventDefault();
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    for (let i = 0; i < +numbersOfLines.value; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "1px solid black";
        for (let j = 0; j < +numbersOfColums.value; j++) {
            let th = document.createElement("th");
            th.style.border = "1px solid black";
            th.innerText = textInTable.value;
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    numbersOfLines.value = "";
    numbersOfColums.value = "";
    textInTable.value = "";
};
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається