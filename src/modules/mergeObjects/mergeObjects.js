
import isPlainObject from '../isPlainObject/isPlainObject.js';

const mergeObjects = function( out = {} ) {

    Array.from(arguments).filter(arg => !!arg).forEach(arg => {
        Object.keys(arg).forEach(key => {
            if ( isPlainObject(arg[key]) ){
                out[key] = mergeObjects(out[key], arg[key]);
            } else {
                out[key] = arg[key];
            }
        });
    });

    return out;
    
};

export default mergeObjects
