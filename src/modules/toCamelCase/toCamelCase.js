
export default ( string = '' ) => {
    return string.replace(/([-_ ])([a-z])/ig, (match, p1, p2) => p2.toUpperCase() );
}
