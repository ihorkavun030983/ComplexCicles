// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// let str = '';
// for (let i = 20; i <= 30; i = i + 0.5) {
//   str += i + ' ';
// }
// console.log(str.trim());

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// let priceUsd = 27
// for (let i = 10; i<=100; i = i + 10){
//     console.log(priceUsd*i)
// }

// Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// let numberFree = 40;
// let firstNum = 1;

// for(firstNum; firstNum <= 100; firstNum++){
//     let result = Math.pow(firstNum, 2);
// if(result < numberFree)
    
//     console.log(result);
// }

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let freeNum = 12
// function isPrime(freeNum) {
//     let _true = 'число простe', _false = 'число складене';
//     if (freeNum == 2) 
//     return _true;
//     for (let i = 2; i <= freeNum / 2; i++) {
//     if (freeNum % i == 0) {
//     return _false;
//     }
//     }
//     return _true;
//     }
// console.log(isPrime(freeNum));

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// function numberThree(num) {
//     while (num % 3 == 0) {
//       num /= 3;
//     }

//     return num == 1;
//   }
  
//   console.log(numberThree(9));
//   console.log(numberThree(81));
//   console.log(numberThree(15));
//   console.log(numberThree(13));