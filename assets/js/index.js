'use strict';

import {task1} from './task 1.js';
import {task2} from './task 2.js';
import {task3} from './task 3.js';
import {getRandomValues} from './features/rand fun.js'

console.log('Результат работы функций с дефолтными значениями');
console.log(task1());
console.log(task2());
console.log(task3());


const inputDataForFirstTask = getRandomValues(9,10);
const inputDataForSecondTask = [];

for(let i = 0; i < 3; i++){
    inputDataForSecondTask.push(getRandomValues(9, 10))
}

console.log('рандомными');
console.log('task 1 входные значения:',inputDataForFirstTask);
console.log('результат:',task1(inputDataForFirstTask));
console.log('task 2 входные значения:', inputDataForSecondTask);
console.log('результат:',task2(inputDataForSecondTask));
