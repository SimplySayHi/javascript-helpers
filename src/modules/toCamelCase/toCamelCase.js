
export default ( string = '' ) => {
    return string.trim().replace(/([-_ ])([a-z])/ig, (match, p1, p2) => p2.toUpperCase() );
}
