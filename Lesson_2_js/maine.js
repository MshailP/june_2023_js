// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого
// типу, вивести кожен елемент в консоль


let arr = [];
arr[0] = 1;
arr[1] = 'hello';
arr[2] = 'world';
arr[3] = 'qwe';
arr[4] = 513;
arr[5] = 62948.34;
arr[6] = 'v';
arr[7] = -15;
arr[8] = true;
arr[9] = false;

console.log(arr[3]);

arr[3] = 'js';

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'story1',
    pageCount: 617,
    genre: 'fantasy',
}
let book2 = {
    title: 'story2',
    pageCount: 316,
    genre: 'short stories',
}
let book3 = {
    title: 'story3',
    pageCount: 956,
    genre: 'romance novel',
}

console.log(book1);
console.log(book2);
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book1_1 = {
    title: 'story1_1',
    pageCount: 617,
    genre: 'fantasy',
    authors: [
        {
            name: 'Mykhailo',
            age: 22
        },
        {
            name: 'Vasya',
            age: 34
        },
        {
            name: 'Martin',
            age: 28
        }
    ]
}
let book1_2 = {
    title: 'story1_2',
    pageCount: 316,
    genre: 'short stories',
    authors: [
        {
            name: 'Oleg',
            age: 31
        },
        {
            name: 'Rodion',
            age: 24
        },
        {
            name: 'Yuri',
            age: 48
        }
    ]
}
let book1_3 = {
    title: 'story1_3',
    pageCount: 956,
    genre: 'romance novel',
    authors: [
        {
            name: 'Philip',
            age: 35
        },
        {
            name: 'Roman',
            age: 29
        },
        {
            name: 'Oksana',
            age: 32
        }
    ]
}

console.log(book1_1)
console.log(book1_2)
console.log(book1_3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let Users = [
    {
        name: 'Mykhailo',
        username: 'user145352443',
        password: 375411
    },
    {
        name: 'Olexander',
        username: 'user23245235',
        password: 444451
    },
    {
        name: 'Andriy',
        username: 'user32346345',
        password: 333352
    },
    {
        name: 'Victor',
        username: 'user42345325',
        password: 999932
    },
    {
        name: 'Glib',
        username: 'user5345234523',
        password: 998034
    },
    {
        name: 'Evgen',
        username: 'user632453254',
        password: 375460
    },
    {
        name: 'Ivan',
        username: 'user72345235',
        password: 334213
    },
    {
        name: 'Kostyantyn',
        username: 'user82352323',
        password: 300029
    },
    {
        name: 'Maxim',
        username: 'user923452345',
        password: 123456
    },
    {
        name: 'Sergiy',
        username: 'user1023453245',
        password: 654321
    }
]


console.log(Users[0].password)
console.log(Users[1].password)
console.log(Users[2].password)
console.log(Users[3].password)
console.log(Users[4].password)
console.log(Users[5].password)
console.log(Users[6].password)
console.log(Users[7].password)
console.log(Users[8].password)
console.log(Users[9].password)

//

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x !== 0
    ? console.log('Вірно')
    : console.log('Невірно');
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 56;
if (time > 0 && time <= 15) {
    console.log('перша частина години');
} else if (time > 15 && time <= 30) {
    console.log('друга частина години');
} else if (time > 30 && time <= 45) {
    console.log('третя частина години');
} else if (time > 45 && time <= 59) {
    console.log('четверта частина години');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;
if (day > 0 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 30) {
    console.log('Третя декада');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = 3;
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.error('Error');
}

//     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let a = 2;
let b = 9;
if (a > b){
    console.log('a');
} else if (a < b){
    console.log('b');
}else if (a === b){
    console.log('equal');
}else {
    console.error('Error');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xx = '';
xx = xx || 'default' ;
console.log(xx);


//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив
// coursesAndDurationArray. За допомоги іф перевірити кожен його
// елемент на тривалість навчання. У випадку якщо тривалість довша за
// 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super!');
}if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super!');
}if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super!');
}if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super!');
}if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super!');
}if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super!');
}