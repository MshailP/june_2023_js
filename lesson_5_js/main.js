// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => a * b;
console.log(rectangle(2, 4))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sCircle =(r) => Math.PI * r * r;
console.log(sCircle(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sCylinder = (h, r) => (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
console.log(sCylinder(7, 3))
// - створити функцію яка приймає масив та виводить кожен його елемент
const logger=(arr) =>{
    for (const item of arr) {
        console.log(`item :`, item);
    }
}
logger([12, 445, `qwerty`, true]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const pCreator=(text) => document.write(`<p>${text}</p>`);
pCreator(`qwe qwe qwe`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulCreator=(text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator(`some text`);
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ul2Creator=(text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ul2Creator(`some text`, 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const ul3Creator=(arr) => {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
ul3Creator([`qwe`, 123, true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function userPresentor(arr) {
    for (const user of arr) {
        document.write(`
             <div>
                <p>name: ${user.name}</p>
                <p>age: ${user.age}</p>
                <p>status: ${user.status}</p>
             </div>
             -------------------
`)
    }
}
userPresentor(users)
// - створити функцію яка повертає найменьше число з масиву
const minNumber=(arrOfNums) => {
    let min = arrOfNums[0];
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < arrOfNums[0]){
            min = arrOfNums[i];
        }
    }
    return min;
}
console.log(`minNumber:`,minNumber([22, 43, -21, 114, 999]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sum=(arrOfNums)=> {
    let result = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        result = result + arrOfNums[i];
    }
    return result;
}
console.log(`sum:`, sum([5, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap=(arr, index1, index2)=> {
    const numIndex1 = arr[index1];
    const numIndex2 = arr[index2];
    arr[index1] = numIndex2;
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 2, 3));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange=(sum, currencies, resultCurrency) => {
    for (const cur of currencies) {
        if (cur.currency === resultCurrency) {
            return sum / cur.value
        }
    }
}
const result = exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}], `Usd`);
console.log(`result :`, result)