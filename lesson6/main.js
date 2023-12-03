//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log("hello world".length);
console.log("lorem ipsum".length);
console.log("javascript is cool".length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log("hello world".toUpperCase());
console.log("lorem ipsum".toUpperCase());
console.log("javascript is cool".toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("HELLO WORLD".toLowerCase());
console.log("LOREM IPSUM".toLowerCase());
console.log("JAVASCRIPT IS COOL".toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = " dirty string   ";
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = "Ревуть воли як ясла повні";
console.log(string.split(" "));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let intToStringArray = numbers.map(value => "" + value);
console.log(intToStringArray);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNumber = (array, direction) => {
    if (direction === "ascending") {
        array.sort((a, b) => a - b);
    } else if (direction === "descending") {
        array.sort((a, b) => b - a);
    } else {
        console.log("something wrong!!!")
    }
    return array;
}
console.log(sortNumber(numbers, "ascending"));
//
// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
//  -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
    return  {
        id: ++index,
        ...value
    }}));
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deckOfCards = [
    {value: "6", cardSuit: "spades", color: "black"},
    {value: "7", cardSuit: "spades", color: "black"},
    {value: "8", cardSuit: "spades", color: "black"},
    {value: "9", cardSuit: "spades", color: "black"},
    {value: "10", cardSuit: "spades", color: "black"},
    {value: "jack", cardSuit: "spades", color: "black"},
    {value: "queen", cardSuit: "spades", color: "black"},
    {value: "king", cardSuit: "spades", color: "black"},
    {value: "ace", cardSuit: "spades", color: "black"},
    {value: "6", cardSuit: "clubs", color: "black"},
    {value: "7", cardSuit: "clubs", color: "black"},
    {value: "8", cardSuit: "clubs", color: "black"},
    {value: "9", cardSuit: "clubs", color: "black"},
    {value: "10", cardSuit: "clubs", color: "black"},
    {value: "jack", cardSuit: "clubs", color: "black"},
    {value: "queen", cardSuit: "clubs", color: "black"},
    {value: "king", cardSuit: "clubs", color: "black"},
    {value: "ace", cardSuit: "clubs", color: "black"},
    {value: "6", cardSuit: "hearts", color: "red"},
    {value: "7", cardSuit: "hearts", color: "red"},
    {value: "8", cardSuit: "hearts", color: "red"},
    {value: "9", cardSuit: "hearts", color: "red"},
    {value: "10", cardSuit: "hearts", color: "red"},
    {value: "jack", cardSuit: "hearts", color: "red"},
    {value: "queen", cardSuit: "hearts", color: "red"},
    {value: "king", cardSuit: "hearts", color: "red"},
    {value: "ace", cardSuit: "hearts", color: "red"},
    {value: "6", cardSuit: "diamonds", color: "red"},
    {value: "7", cardSuit: "diamonds", color: "red"},
    {value: "8", cardSuit: "diamonds", color: "red"},
    {value: "9", cardSuit: "diamonds", color: "red"},
    {value: "10", cardSuit: "diamonds", color: "red"},
    {value: "jack", cardSuit: "diamonds", color: "red"},
    {value: "queen", cardSuit: "diamonds", color: "red"},
    {value: "king", cardSuit: "diamonds", color: "red"},
    {value: "ace", cardSuit: "diamonds", color: "red"}];
console.log(deckOfCards);
//  - знайти піковий туз
console.log(deckOfCards.filter(value => value.value === "ace").find(value => value.cardSuit === "spades"));
//  - всі шістки
console.log(deckOfCards.filter(value => value.value === "6"));
//  - всі червоні карти
console.log(deckOfCards.filter(value => value.color === "red"));
//  - всі буби
console.log(deckOfCards.filter(value => value.cardSuit === "diamonds"));
//  - всі трефи від 9 та більше
console.log(deckOfCards.filter(value => value.cardSuit === "clubs").filter(value => value.value.length > 1 || value.value === "9"));
// =========================
let reduce = deckOfCards.reduce((accumulator, card) => {
    if (card.cardSuit === "spades") {
        accumulator.spades.push(card);
    } else if (card.cardSuit === "clubs") {
        accumulator.clubs.push(card);
    } else if (card.cardSuit === "hearts") {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === "diamonds") {
        accumulator.diamonds.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => value.modules.includes("sass")));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => value.modules.includes("docker")));