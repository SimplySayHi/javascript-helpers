
import getUniqueFields from '../getUniqueFields/getUniqueFields.js';
import getElements from '../getElements/getElements.js';

export default ( formEl = null ) => {

    formEl = getElements(formEl)[0];

    if( !formEl ){ return [] };
    
    return getUniqueFields( formEl )
        .map(fieldEl => {
            const name = fieldEl.name,
                type = fieldEl.type,
                isCheckboxOrRadio = (type === 'checkbox' || type === 'radio'),
                fieldChecked = formEl.querySelector('[name="' + name + '"]:checked'),
                isReqFrom = fieldEl.matches('[data-required-from]'),
                reqMoreEl = (isReqFrom ? formEl.querySelector(fieldEl.getAttribute('data-required-from')) : null);

            return (
                isCheckboxOrRadio ? (fieldChecked || null) :
                (isReqFrom && reqMoreEl.checked) || (!isReqFrom && fieldEl.value) ? fieldEl : null
            );
        })
        .filter(fieldEl => {
            return  fieldEl !== null;
        });

}
