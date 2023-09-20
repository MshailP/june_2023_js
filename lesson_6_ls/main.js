// - Знайти та вивести довижину настипних стрінгових значень
const str1='hello world';
const str2= 'lorem ipsum';
const str3='javascript is cool';
console.log(str1.length)
console.log(str2.length)
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
const arr1=['hello world', 'lorem ipsum', 'javascript is cool'];
const result = arr1.map((str) => str.toUpperCase());
console.log(result);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const arr2=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
const result2 = arr2.map((str) => str.toLowerCase());
console.log(result2);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str4 = ' dirty string   ';
console.log(str4.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
const stringToarray=(str) => str.split(` `);
console.log(stringToarray(str));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
const result4 =arrNum.map((num) => num.toString());
console.log(result4);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    const sortNums = (nums, direction) =>{
        switch (direction) {
            case 'ascending':
                return nums.sort((a, b) => a - b)
            case 'descending':
                return nums.sort((a, b) => b - a)
        }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
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
// -- відсортувати його за спаданням за monthDuration
const sortedArr = coursesAndDurationArray.sort((a, b)=> b.monthDuration - a.monthDuration );
console.log(sortedArr);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredArr = coursesAndDurationArray.filter(({monthDuration}) => monthDuration > 5);
console.log(filteredArr);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mappedArr = coursesAndDurationArray.map((value, index) =>{
    return{
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
});
console.log(mappedArr);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    { name: "6", suit: "spades", color: "black" },
    { name: "7", suit: "spades", color: "black" },
    { name: "8", suit: "spades", color: "black" },
    { name: "9", suit: "spades", color: "black" },
    { name: "10", suit: "spades", color: "black" },
    { name: "jack", suit: "spades", color: "black" },
    { name: "queen", suit: "spades", color: "black" },
    { name: "king", suit: "spades", color: "black" },
    { name: "ace", suit: "spades", color: "black" },
    { name: "6", suit: "diamonds", color: "red" },
    { name: "7", suit: "diamonds", color: "red" },
    { name: "8", suit: "diamonds", color: "red" },
    { name: "9", suit: "diamonds", color: "red" },
    { name: "10", suit: "diamonds", color: "red" },
    { name: "jack", suit: "diamonds", color: "red" },
    { name: "queen", suit: "diamonds", color: "red" },
    { name: "king", suit: "diamonds", color: "red" },
    { name: "ace", suit: "diamonds", color: "red" },
    { name: "6", suit: "hearts", color: "red" },
    { name: "7", suit: "hearts", color: "red" },
    { name: "8", suit: "hearts", color: "red" },
    { name: "9", suit: "hearts", color: "red" },
    { name: "10", suit: "hearts", color: "red" },
    { name: "jack", suit: "hearts", color: "red" },
    { name: "queen", suit: "hearts", color: "red" },
    { name: "king", suit: "hearts", color: "red" },
    { name: "ace", suit: "hearts", color: "red" },
    { name: "6", suit: "clubs", color: "black" },
    { name: "7", suit: "clubs", color: "black" },
    { name: "8", suit: "clubs", color: "black" },
    { name: "9", suit: "clubs", color: "black" },
    { name: "10", suit: "clubs", color: "black" },
    { name: "jack", suit: "clubs", color: "black" },
    { name: "queen", suit: "clubs", color: "black" },
    { name: "king", suit: "clubs", color: "black" },
    { name: "ace", suit: "clubs", color: "black" }
];
// - знайти піковий туз

const ace = cards.find((card) => card.name === `ace` && card.suit === `spades`);
console.log(ace);

// - всі шістки

const s6 = cards.filter((card) => card.name === `6`);
console.log(s6);
// - всі червоні карти

const reds = cards.filter((card) => card.color === `red`);
console.log(reds);
// - всі буби
const diamonds = cards.filter((card) => card.suit === `diamonds`);
console.log(diamonds);
// - всі трефи від 9 та більше
const CN = cards.filter((card) => card.name > 8 || card.name === `jack` || card.name === `queen` || card.name === `king`|| card.name === `ace`);
console.log(CN);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10','jack','queen','king', 'ace'
//     color:'', // 'red','black'
// }

// =========================


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardsR = cards.reduce((acc, cur) => {
   acc[cur.suit].push(cur);
   return acc;
}, {spades:[], diamonds:[],hearts:[],clubs:[]});
console.log(cardsR);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
const sass = coursesArray.filter((c) => c.modules.includes(`sass`));
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
const docker = coursesArray.filter((c) => c.modules.includes(`docker`));
console.log(docker);