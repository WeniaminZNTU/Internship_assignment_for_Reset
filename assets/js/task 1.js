'use strict';

export const task1 = (initialData=[1,3,5,4,5,7]) => {
    if( !Array.isArray(initialData) || initialData.length < 3 ){
        return null;
    }

    const results = [];

    for(let a = 0, b = 1, c = 2; c < initialData.length; a++, b++, c++){
        if( (initialData[a] < initialData[b] && initialData[c] < initialData[b]) || initialData[a] > initialData[b] && initialData[c] > initialData[b]){
            results.push(1);
        }
        else{
            results.push(0);
        }
    }

    return results;
}
