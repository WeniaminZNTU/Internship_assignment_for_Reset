'use strict'

const body = document;

body.getElementById = document.getElementById;

const task1 = body.getElementById('task1Default');
const task2 = body.getElementById('task2Default');
const task3 = body.getElementById('task3Default');


const task1RandomInput = body.getElementById('task1RandomInput');
const task2RandomInput = body.getElementById('task2RandomInput');

const task1RandomOutput = body.getElementById('task1RandomOutput');
const task2RandomOutput = body.getElementById('task2RandomOutput');


export {task1, task2, task3, task1RandomInput, task2RandomInput, task1RandomOutput, task2RandomOutput}
