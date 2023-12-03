//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

console.log(new User(1, "ivan", "ivanov", "ivanov@gmail.com", "+38099123456"));
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(34, "Giannis", "Antetokounmpo", "greek_freak@gmail.com", "+38099123456"),
    new User(15, "Nikola", "Jokic", "joker@gmail.com", "+38099167456"),
    new User(0, "Jayson", "Tatum", "tatum@gmail.com", "+38076167456"),
    new User(30, "Steph", "Curry", "chef@gmail.com", "+38076167235"),
    new User(77, "Luka", "Doncic", "magic@gmail.com", "+38029167235"),
    new User(21, "Joel", "Embiid", "process@gmail.com", "+38023160235"),
    new User(23, "LeBron", "James", "king@gmail.com", "+38013160935"),
    new User(22, "Jimmy", "Butler", "jimbo@gmail.com", "+38023460935"),
    new User(2, "Kawhi", "Leonard", "terminator@gmail.com", "+38223450935"),
    new User(1, "Devin", "Booker", "book1@gmail.com", "+38228410935"),
];
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(8, "Dominik", "Szoboszlai", "szobo@gmail.com", "+38056117231", ["1", "2", "3", "4", "5", "6", "7", "8"]),
    new Client(10, "Alexis", "MacAllister", "alexis@gmail.com", "+38016177631", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
    new Client(1, "Allisson", "Bekker", "bekker@gmail.com", "+38026163631", ["1"]),
    new Client(9, "Darwin", "Nunez", "nunez@gmail.com", "+38024123681", ["1", "2", "3", "4", "5", "6", "7", "8", "9"]),
    new Client(3, "Wataru", "Endo", "endo@gmail.com", "+38054323181", ["1", "2", "3"]),
    new Client(7, "Luiz", "Diaz", "diaz@gmail.com", "+38053326581", ["1", "2", "3", "4", "5", "6", "7"]),
    new Client(4, "Virgil", "van Dijk", "virgil@gmail.com", "+38023346451", ["1", "2", "3", "4"]),
    new Client(6, "Thiago", "Alcantara", "thiago@gmail.com", "+38025436751", ["1", "2", "3", "4", "5", "6"]),
    new Client(5, "Ibrahima", "Konaté", "konaté@gmail.com", "+38015353751", ["1", "2", "3", "4", "5"]),
    new Client(2, "Joe", "Gomez", "gomez@gmail.com", "+38021333555", ["1", "2"])
]
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function BMWCar(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    this.info = function () {
        const info = Object.entries(this); // можливо перемудрував
        for (const element of info) {
            if (typeof element[1] === "function" || typeof element[1] === "object") {
                continue;
            }
            console.log(`${element[0]} - ${element[1]}`);
        }
    };
    this.increaseMaxSpeed = function (value) {
        this.maxSpeed = value;
    };
    this.changeYear = function (value) {
        this.year = value;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let bmw = new BMWCar("M3", "BMW", 2013, 250, 4.0);
console.log(bmw);
bmw.drive();
bmw.info();
bmw.changeYear(2015);
bmw.increaseMaxSpeed(280);
bmw.addDriver({name: "Yura",age: 33, drive_exp: 12});
console.log(bmw);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class AudiCar {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    info() {
        const info = Object.entries(this); // можливо перемудрував
        for (const element of info) {
            if (typeof element[1] === "function" || typeof element[1] === "object") {
                continue;
            }
            console.log(`${element[0]} - ${element[1]}`);
        }
    };

    increaseMaxSpeed(value) {
        this.maxSpeed = value;
    }

    changeYear(value) {
        this.year = value;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let audi = new AudiCar("R-8", "Audi", 2015, 220, 3.0);
console.log(audi);
audi.drive();
audi.info();
audi.changeYear(2020);
audi.increaseMaxSpeed(240);
bmw.addDriver({name: "Misha", age: 27, drive_exp: 8});
console.log(bmw);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let cinderellaArray = [
    new Cinderella("Vika", 28, 39),
    new Cinderella("Olya", 29, 40),
    new Cinderella("Anya", 31, 40.5),
    new Cinderella("Masha", 30, 39.5),
    new Cinderella("Dasha", 32, 38.5),
    new Cinderella("Diana", 27, 38),
    new Cinderella("Sveta", 33, 37.5),
    new Cinderella("Julia", 34, 36),
    new Cinderella("Kristina", 25, 37),
    new Cinderella("Vlada", 26, 41)
];
console.log(cinderellaArray);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, shoe_size) {
    this.name = name;
    this.age = age;
    this.shoe_size = shoe_size;
}

let prince = new Prince("Prince", 32, 38.5);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellaArray) {
    if (cinderella.foot_size === prince.shoe_size) {
        console.log(cinderella.name);
        break;
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellaArray.find(value => value.foot_size === prince.shoe_size));