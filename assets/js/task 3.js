'use strict';

export const task3 = (inputArray = 
[
    ['Hello','world'],
    ['Brad','come','to','dinner','with','us'],
    ['He','loves','tacos']
], 
formattingValues = ['LEFT','RIGHT','LEFT'], 
lineSize = 16) => {

const outputArray = [];
let firstAndLastStr = '';

for(let i = 0; i < (lineSize + 2); i++) firstAndLastStr += '*';

outputArray.push(firstAndLastStr);

    const formattingSmallLeft = (massage) => {
        for(let i = massage.length; i < lineSize; i++){
            massage += ' ';
        }
        outputArray.push(`*${massage}*`);

    }

    const formattingSmallRight = (massage) => {
        let blankPart = '*';

        for(let i = 0; i < (lineSize - massage.length); i++){
            blankPart += ' ';
        }

        outputArray.push(`*${blankPart}${massage}*`);

    }

    const formattingLargeLeft = (string) => {
        let point;
        const stringLength = string.length;

        if(stringLength > lineSize){
            for(let i = 0; i < lineSize; i++){
                    if(string[i] === ' '){
                        point = i;
                    }    
            }    

            const insertedPart = string.slice(0, point);
            const restPart = string.slice(point+1);

            formattingSmallLeft(insertedPart);
            formattingLargeLeft(restPart);
        }
        else{
            formattingSmallLeft(string);
            return;
        }
    }

    const formattingLargeRight = (string) => {
        let point;
        const stringLength = string.length;

        if(stringLength > lineSize){
            for(let i = 0; i < lineSize; i++){
                    if(string[i] === ' '){
                        point = i;
                    }    
            }    

            const insertedPart = string.slice(0, point);
            const restPart = string.slice(point+1);

            formattingSmallRight(insertedPart);
            formattingLargeRight(restPart);
        }
        else{
            formattingSmallRight(string);
            return;
        }
    }


    for(let i = 0; i < inputArray.length; i++){

        let string = inputArray[i].join(' ');


        if(string.length < lineSize){
            if(formattingValues[i] === 'LEFT'){
                formattingSmallLeft(string);
            }
            if(formattingValues[i] === 'RIGHT'){
                formattingSmallRight(string);
            }
        }

        if(string.length > lineSize){
            if(formattingValues[i] === 'LEFT'){
                formattingLargeLeft(string);
            }
            if(formattingValues[i] === 'RIGHT'){
                formattingLargeRight(string);
            }
        }
    }

outputArray.push(firstAndLastStr);

return outputArray;
}
