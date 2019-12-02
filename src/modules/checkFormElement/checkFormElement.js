
import isDomNode from '../isDomNode/isDomNode.js';
import isValidSelector from '../isValidSelector/isValidSelector.js';

export default ( formEl = null ) => {

    const isFormSelector = isValidSelector(formEl) && document.querySelector(formEl).tagName.toLowerCase() === 'form';

    return {
        result: isFormSelector || isDomNode(formEl),
        element: isFormSelector ? document.querySelector(formEl) : formEl
    }
    
}
