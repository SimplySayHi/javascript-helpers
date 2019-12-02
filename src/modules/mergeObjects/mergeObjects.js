
import isPlainObject from '../isPlainObject/isPlainObject.js';

const mergeObjects = function( out = {} ) {

    for(let i=1; i<arguments.length; i++){
        let obj = arguments[i];

        if(!obj){ continue; }

        for(let key in obj){
            if( obj.hasOwnProperty(key) ){
                if ( isPlainObject(obj[key]) ){
                    out[key] = mergeObjects(out[key], obj[key]);
                } else {
                    out[key] = obj[key];
                }
            }
        }
    }

    return out;
    
};

export default mergeObjects
