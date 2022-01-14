'use strict';

import {fTask1} from './task 1.js';
import {fTask2, dataTask2} from './task 2.js';
import {fTask3, dataTask3} from './task 3.js';
import {getRandomValues} from './features/randFun.js'

import {task1, task2, task1RandomInput, task2RandomInput, task1RandomOutput, task2RandomOutput, task3} from './DOM.js';


const inputDataForFirstTask = getRandomValues(9,10);
const inputDataForSecondTask = [];
const outputDateForThirdTask = fTask3(dataTask3.value1, dataTask3.value2, dataTask3.value3);

for(let i = 0; i < 3; i++){
    inputDataForSecondTask.push(getRandomValues(9, 10));
}

task1.textContent = `1: [ ${fTask1()} ]`;
task2.textContent = `2: [ ${fTask2(dataTask2)[0]}, ${fTask2(dataTask2)[1]}, ${fTask2(dataTask2)[2]} ]`;
task3.textContent = '3: in console';

task1RandomInput.textContent = `Task 1 входные значения: ${inputDataForFirstTask}`;
task1RandomOutput.textContent = `Результат: ${fTask1(inputDataForFirstTask).join(', ')}`;

task2RandomInput.textContent = `Task 2 входные значения: ${inputDataForSecondTask}`;
task2RandomOutput.textContent = `Результат: ${fTask2(inputDataForSecondTask).join(', ')}`;



console.log('Результат работы функций с дефолтными значениями');
console.log(fTask1());
console.log(fTask2(dataTask2));
console.log(fTask3(dataTask3.value1, dataTask3.value2,dataTask3.value3));

console.log('рандомными');
console.log('task 1 входные значения:',inputDataForFirstTask);
console.log('результат:',fTask1(inputDataForFirstTask));
console.log('task 2 входные значения:', inputDataForSecondTask);
console.log('результат:',fTask2(inputDataForSecondTask));
