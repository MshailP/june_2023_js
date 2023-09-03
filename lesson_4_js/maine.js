// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}
console.log(rectangle(2,4))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    return Math.PI * r * r;
}
console.log(sCircle(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(h, r) {
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
}
console.log(sCylinder(7, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент
function logger(arr) {
    for (const item of arr) {
        console.log(`item :`, item);
    } 
}
logger([12, 445, `qwerty`, true]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(text) {
    document.write(`<p>${text}</p>`);
}
pCreator(`qwe qwe qwe`);
pCreator(`dsa dsa dsa`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator(`some text 1`);
ulCreator(`some text 2`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul2Creator(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ul2Creator(`some text 3`, 4);
ul2Creator(`some text 4`, 2);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250