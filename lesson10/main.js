//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const userForm = () => {
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
    inputAge.min = 1;
    inputAge.max = 99;
    inputAge.placeholder = "enter age";
    inputAge.name = "age";
    const button = document.createElement("button");
    button.innerText = "Create user";
    button.disabled = true;
    form.addEventListener("input", function () {
        inputName.value && inputSurname.value && inputAge.value ? button.disabled = false : button.disabled = true;
    });
    button.onclick = function (ev) {
        ev.preventDefault();
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerText = `${inputName.value} ${inputSurname.value}`;
        p.innerText = `${inputAge.name}: ${inputAge.value} years`;
        div.append(h3, p);
        document.body.appendChild(div);
        inputName.value = "";
        inputSurname.value = "";
        inputAge.value = "";
        button.disabled = true;
    };
    form.append(inputName, inputSurname, inputAge, button);
    document.body.appendChild(form);
};
userForm();
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const counterOfSessions = () => {
    if (!localStorage.getItem("numberOfSessions")) {
        localStorage.setItem("numberOfSessions", 0);
    }
    localStorage.setItem("numberOfSessions", +localStorage.getItem("numberOfSessions") + 1);
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const counter = localStorage.getItem("numberOfSessions");
    h3.innerText = `Number of sessions - ${counter}`;
    div.appendChild(h3);
    document.body.appendChild(div);
}
counterOfSessions();
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
const sessoinsOfPage = () => {
    if (!localStorage.getItem("sessions")) {
        localStorage.setItem("sessions", JSON.stringify([]));
    }
    let sessions = JSON.parse(localStorage.getItem("sessions"));
    sessions.push(new Date());
    localStorage.setItem("sessions", JSON.stringify(sessions));
}
sessoinsOfPage();
// зробити масив на 100 об'єктів та дві кнопки prev next
const array = [];
for (let i = 1; i <= 100; i++) {
    array.push({id: i});
}
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const pagination = (array, fist, last) => {
    if (last > array.length) {
        last = array.length;
    } else if (last === array.length - 10 && array.length % 10 != 0) {
        const number = 10 - array.length % 10;
        fist += number;
        last += number;
    }
    const paginationDiv = document.getElementById("paginationDiv");
    paginationDiv.innerHTML = "";
    for (fist; fist < last; fist++) {
        const p = document.createElement("p");
        p.innerText = array[fist].id;
        paginationDiv.appendChild(p);
    }
    fistElement = fist;
}
const paginationOfArray = (array) => {
    let div = document.createElement("div");
    div.style.width = "100px";
    let numberOfList = document.createElement("p");
    numberOfList.setAttribute("id", "numberOfList");
    numberOfList.innerText = 1;
    numberOfList.style.margin = "0 5px";
    const divWithItems = document.createElement("div");
    divWithItems.style.display = "flex";
    divWithItems.style.flexDirection = "column";
    divWithItems.style.alignItems = "center";
    divWithItems.setAttribute("id", "paginationDiv");
    div.appendChild(divWithItems);
    document.body.appendChild(div);
    pagination(array, fistElement, fistElement + 10);
    const prev = document.createElement("button");
    const next = document.createElement("button");
    prev.innerText = "prev";
    prev.disabled = true;
    next.innerText = "next";
    const footer = document.createElement("div");
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.append(prev, numberOfList, next)
    div.appendChild(footer);
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
}
let fistElement = 0;
paginationOfArray(array);
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const invisibleDiv = (text) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.innerText = text;
    p.setAttribute("id", "text");
    p.setAttribute("class", "visibility");
    button.innerText = "Make text invisible";
    div.append(p, button);
    document.body.appendChild(div);
    button.onclick = function () {
        const element = document.getElementById("text");
        element.classList.toggle("visibility");
        const className = element.className;
        if (!className) {
            element.style.color = "white";
            element.innerText = "I am invisible"; // можна і пусту стрінгу, але, мені здається, що так красивіше.
            button.innerText = "Make text visible";
        } else {
            element.style.color = "black";
            element.innerText = "I am visible";
            button.innerText = "Make text invisible";
        }
    }
};
invisibleDiv("I am visible");
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const enterForAdult = () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "enter your age";
    input.min = 1;
    input.max = 99;
    const button = document.createElement("button");
    button.innerText = "enter";
    button.disabled = true;
    form.append(input, button);
    document.body.appendChild(form);
    form.addEventListener("input", function () {
        input ? button.disabled = false : button.disabled = true;
    })
    button.onclick = function (ev) {
        ev.preventDefault();
        if (input.value < 18) {
            alert("Sorry, but this content not for you, baby");
        } else {
            window.open("https://www.google.com.ua/");
        }
        input.value = "";
        button.disabled = true;
    }
}
enterForAdult();
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const createTable = () => {
    const tableForm = document.createElement("form");
    const numbersOfLines = document.createElement("input");
    numbersOfLines.type = "number";
    numbersOfLines.placeholder = "enter number of lines"
    numbersOfLines.min = 1;
    const numbersOfColums = document.createElement("input");
    numbersOfColums.type = "number";
    numbersOfColums.placeholder = "enter number of colums";
    numbersOfColums.min = 1;
    const textInTable = document.createElement("input");
    textInTable.type = "text";
    textInTable.placeholder = "enter text";
    const buttonTable = document.createElement("button");
    buttonTable.innerText = "Create table";
    buttonTable.disabled = true;
    tableForm.append(numbersOfLines, numbersOfColums, textInTable, buttonTable);
    document.body.appendChild(tableForm);
    tableForm.addEventListener("input", function () {
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
        buttonTable.disabled = true;
    };
}
createTable();
// (Додатковачастина для завдання)
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const moneyForSessions = (money) => {
    const div = document.createElement("div");
    if (!localStorage.getItem("money")) {
        localStorage.setItem("money", money);
    }
    onunload = (ev) => { // onload на стадії deprecated, альтернатива XRSession.onend на стадії еxperimental Intellij не підтягує її(коли ти пишеш і тобі кидається рекомендації), пишеш в наглу - браузер не розуміє (Chrome)
        if (ev.timeStamp > 10000) {
            money += 10;
            localStorage.setItem("money", money);
        }
    }
    div.innerText = money + " грн";
    document.body.appendChild(div);
}
moneyForSessions(+localStorage.getItem("money") || 100);
