'use strict';

export const task2 = (initialData= 
    [
        [1,2,3,2,7],
        [4,5,6,8,1],
        [7,8,9,4,5]
    ]) => {
    const results = [];
    const temp = [];

    for(let Ya = 0, Yb = 1, Yc = 2, i = 0; i < initialData[0].length; i++){
            if(i < 2){

                temp.push(initialData[Ya][i]);
                temp.push(initialData[Yb][i]);
                temp.push(initialData[Yc][i]);
            }
            else{

                temp.push(initialData[Ya][i]);
                temp.push(initialData[Yb][i]);
                temp.push(initialData[Yc][i]);

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
