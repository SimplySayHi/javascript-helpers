
export default ( obj ) => {

    const objToString = (
            (obj && typeof obj === 'object' && obj.constructor === Object) ? 
            Object.keys(obj)
                .reduce(function(a,k){
                    a.push(k+'='+encodeURIComponent(obj[k]));
                    return a
                },[]).join('&') : 
            ''
    );
    return objToString;
    
}
