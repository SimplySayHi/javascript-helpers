
export default (stringSelector) => {
    try{
        const isString = typeof stringSelector === 'string';
        const hasElements = document.querySelectorAll(stringSelector);
        return isString;
    } catch(error){
        return false;
    }
}
