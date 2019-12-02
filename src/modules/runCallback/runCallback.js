
export default ( {fn = null, data = {}, options = {}} = {} ) => {

    let callbackFnList = [];

    if( typeof fn === 'function' ){
        callbackFnList.push( fn );
    } else if( Array.isArray(fn) ) {
        callbackFnList = fn;
    }

    callbackFnList.forEach(function(fnItem){
        fnItem( data, options );
    });
    
}
