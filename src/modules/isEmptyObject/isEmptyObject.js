
import isPlainObject from '../isPlainObject/isPlainObject.js';

export default ( obj ) => {
    return isPlainObject(obj) && Object.getOwnPropertyNames(obj).length === 0;
}
