
import getUniqueFields from '../getUniqueFields/getUniqueFields.js';
import getElements from '../getElements/getElements.js';

export default formEl => {

    const $form = getElements(formEl)[0];

    if( !$form ){ return [] }
    
    return getUniqueFields( $form )
        .map($field => {
            const name = $field.name,
                type = $field.type,
                isCheckboxOrRadio = (type === 'checkbox' || type === 'radio'),
                fieldChecked = $form.querySelector('[name="' + name + '"]:checked'),
                isReqFrom = $field.matches('[data-required-from]'),
                reqMoreEl = (isReqFrom ? $form.querySelector($field.getAttribute('data-required-from')) : null);

            return (
                isCheckboxOrRadio ? (fieldChecked || null) :
                (isReqFrom && reqMoreEl.checked) || (!isReqFrom && $field.value) ? $field : null
            );
        })
        .filter($field => {
            return  $field !== null;
        });

}
