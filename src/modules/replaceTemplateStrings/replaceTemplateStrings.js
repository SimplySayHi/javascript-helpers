
import isPlainObject from '../isPlainObject/isPlainObject.js';

export default ( obj, string = '' ) => {

    if( !isPlainObject(obj) ){ return string }
    if( typeof string !== 'string' ){ return '' }

    return Object.keys(obj).reduce((accString, name) => {
        const regexStr = new RegExp( '{{' + name + '}}', 'g' );
        return accString.replace(regexStr, obj[name]);
    }, string);

}
