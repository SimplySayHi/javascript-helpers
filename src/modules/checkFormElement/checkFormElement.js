
import getElements from '../getElements/getElements.js';

export default ( formEl ) => {

    formEl = getElements(formEl)[0] || null;
    const isForm = !!formEl && formEl.tagName && formEl.tagName.toLowerCase() === 'form';

    return {
        result: isForm,
        element: formEl
    }
    
}
