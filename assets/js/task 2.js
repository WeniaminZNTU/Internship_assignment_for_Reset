'use strict';

const  dataTask2 = 
    [
        [1,2,3,2,7],
        [4,5,6,8,1],
        [7,8,9,4,5]
    ];

function fTask2(initialData){

    if(initialData.length != 3){
        return null;
    }

    const results = [];
    const temp = [];

    for(let A = 0, B = 1, C = 2, i = 0; i < initialData[0].length; i++){
            if(i < 2){
                temp.push(initialData[A][i]);
                temp.push(initialData[B][i]);
                temp.push(initialData[C][i]);
            }
            else{
                temp.push(initialData[A][i]);
                temp.push(initialData[B][i]);
                temp.push(initialData[C][i]);

                for(let i = 1; i < 10; i++){

                    if(temp.some((number) => number === i)){
                        if(i === 9){
                            results.push(true);
                        }
                        else continue;
                    }
                    else{
                        results.push(false);
                        break;
                    }
                }

                temp.shift();
                temp.shift();
                temp.shift();

            }
        
    }

return results;
}

export { fTask2, dataTask2 };
