
const deepFreeze = obj => {

    if( !obj ){ return; }

    Object.getOwnPropertyNames(obj).forEach(name => {
        const prop = obj[name];
        if( typeof prop === 'object' && prop !== null ){
            deepFreeze(prop);
        }
    });
    
    return Object.freeze(obj);
    
}

export default deepFreeze
