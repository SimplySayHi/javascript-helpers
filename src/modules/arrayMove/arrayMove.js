
export default ( array, fromIndex, toIndex ) => {

    if( !Array.isArray(array) ){ return [] }

    array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    return array;

}
