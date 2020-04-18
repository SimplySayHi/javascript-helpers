
export default ( string = '' ) => {
    return !string ? '' : string.match(/[a-z]+/gi)
        .map(word => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        }).join('')
}