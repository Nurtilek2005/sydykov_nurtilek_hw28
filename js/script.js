/* ----------Задание №1---------- */

// let number = prompt('Введите число');
// let validatePromptNumber = function (number) {
//   if(number === null) {
//     return 'Вы отменили ввод.';
//   }
//   if(isNaN(number) || number === '') {
//     return 'Введите корректные данные!';
//   }
//   if(number > 0) {
//     return 'Вы ввели положительное число';
//   } else if(number < 0) {
//     return 'Вы ввели отрицательное число';
//   } else {
//     return 'Число равно 0';
//   }
// }

// let result = validatePromptNumber(number);

// alert(result);

/* ----------Задание №2---------- */
// let eggsCount = prompt('Сколько яиц нужно сварить');
// let time = 0;
// let zakaz = function (eggsCount, time) {
//   if(eggsCount > 0) {
//     for(let i = 0; i < Math.ceil(eggsCount / 8); i++) {
//       if(eggsCount > 0) {
//         time += 5;
//       }
//     }
//   }
//   if(eggsCount === null) {
//     return 'Вы отменили ввод.'
//   }
//   if(isNaN(eggsCount) || eggsCount === '') {
//     return 'Введите корректные данные';
//   } else {
//     return `Для варки ${eggsCount} яиц нужно ${time} минут`;
//   }

// }
// let result = zakaz(eggsCount, time);

// console.log(result);


/* ----------Задание №3---------- */
// let odd = [0];
// let even = [0];
// let getEvenSum = function (...arguments) {
//   for (let nums in arguments) {
//     arguments[nums] / 2
//   }
// }

// let result = getEvenSum(4, 3, 1, 2, 5, 10, 6, 7, 8);
// console.log(result);

/* ----------Задание №4---------- */
// let examBalls = 0;
// let checkExam = function (reshenie, otvet) {
//   for(let i = 0; i < 4; i++) {
//     if(reshenie[i] === '' || otvet[i] === ''){
//       return 'Введите корректные данные';
//     } else if(reshenie[i] === otvet[i]){
//       examBalls += 4;
//     } else {
//       examBalls -= 1
//     }
//   }
//   console.log('Ваши результаты равны: ' + examBalls + ' баллам')
// }


// let result = checkExam(["a", "a", "b", "b"], ["a", "a", "b", "b"]);
// console.log(result);
