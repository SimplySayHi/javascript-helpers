
import isEmptyObject from '../isEmptyObject/isEmptyObject.js';
import getElements from '../getElements/getElements.js';

export default ( formEl, data, skipFilledFields ) => {

    const $form = getElements(formEl)[0] || null;

    if( !$form || !data || isEmptyObject(data) ){ return $form; }

    Object.keys( data ).forEach(name => {
        const $firstField = $form.querySelector('[name="'+ name +'"]');
        const isRadio = $firstField && $firstField.type === 'radio';
        const isSingleCheckbox = typeof data[name] === 'boolean';
        const keyValue = isSingleCheckbox || isRadio ? [data[name]] : data[name];

        if( Array.isArray(keyValue) ){
            
            // CHECKBOXES ( SINGLE & MUTIPLE ) & RADIOS
            keyValue.forEach(listValue => {
                const isBoolean = typeof listValue === 'boolean';
                const $field = isBoolean ?
                                $form.querySelector('[name="'+ name +'"]') : 
                                $form.querySelector('[name="'+ name +'"][value="'+ listValue +'"]');
                if( $field ){
                    $field.checked = isBoolean ? listValue : true;
                }
            });

        } else {

            const $field = $form.querySelector('[name="'+ name +'"]');
            if( $field && (!skipFilledFields || $field.value === '') ){
                $field.value = keyValue;
            }
        }

    });

    return $form;

}
