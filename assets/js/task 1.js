'use strict';

export const fTask1 = (initialData=[1,3,5,4,5,7]) => {
    if( !Array.isArray(initialData) || initialData.length < 3 ){
        return null;
    }

    const results = [];

    for(let a = 0, b = 1, c = 2; c < initialData.length; a++, b++, c++){
        if( (initialData[a] < initialData[b] &&  initialData[b] > initialData[c]) || (initialData[a] > initialData[b] && initialData[b] < initialData[c])){
            results.push(1);
        }
        else{
            results.push(0);
        }
    }

    return results;
}
