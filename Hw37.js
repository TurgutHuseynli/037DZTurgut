// 1)
//обьясни своими словами, что значит callback функция
//Callback - это функция, которая передаётся как один из аргументов другой функции.

// 2)
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
let name2, age;
function alertInfo(name, age) {
    console.log(`Hi, I am ${name} and I am ${age}`);
}

function userInfo(callbackFunc) {
    name2 = 'Alex';
    age = 19;
    callbackFunc(name2, age)
    //код
}

userInfo(alertInfo);

// 3)
//какая из функций является функцией обратного вызова?
setTimeout(showMessage, 369);

function showMessage() {
    console.log('Сообшение');
    startProgram();
}

// function startProgram() {
//     console.log('Запуск');
// }
//startProgram()

// 4)
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
function startProgram() {
    console.log('Запуск');
}
function showMessage2(callbackFunc){
    console.log('Сообшение');
    callbackFunc()
}
showMessage2(startProgram)

// 5)
//что такое Promise?
//Promise - код, который JS выполнит, но потом.

// 6)
//создайте Promise функцию?
let a6 = new Promise()

// 7)
//обьясни своими словами, что такое res и rej?
let count7 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count7.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//?

// 8)
//обьясни своими словами, что такое .then?
let count8 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count8.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//?

// 9)
//обьясни своими словами, что такое .then?
let count9 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count9.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//?

// 10)
//что значит асинхронный?
//Асинхронный - происходящий во время, отличающееся от времени, в которое происходит что-то другое.

// 11)
//что делает async?
//?

// 12)
//что делает await?
//?