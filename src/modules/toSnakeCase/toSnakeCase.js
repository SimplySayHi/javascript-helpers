
export default ( string = '', useAllCaps = false ) => {
    let newString = string.replace(/(([- ])([a-z]))|(([a-z])?([A-Z]))/g, (match, p1, p2, p3, p4, p5, p6) => {
        const concatGroup = p3 ? '_' + p3 : (p5 || '') + '_' + p6;
        return concatGroup.toLowerCase();
    } );
    return useAllCaps ? newString.toUpperCase() : newString;
}
