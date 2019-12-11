
import isEmptyObject from '../isEmptyObject/isEmptyObject.js';
import getElements from '../getElements/getElements.js';

export default ( formEl, data = {}, skipFilledFields = false ) => {

    formEl = getElements(formEl)[0] || null;

    if( !formEl || !data || isEmptyObject(data) ){ return formEl; }

    Object.keys( data ).forEach(name => {
        const firstFieldEl = formEl.querySelector('[name="'+ name +'"]');
        const isRadio = firstFieldEl && firstFieldEl.type === 'radio';
        const isSingleCheckbox = typeof data[name] === 'boolean';
        const keyValue = isSingleCheckbox || isRadio ? [data[name]] : data[name];

        if( Array.isArray(keyValue) ){
            
            // CHECKBOXES ( SINGLE & MUTIPLE ) & RADIOS
            keyValue.forEach(listValue => {
                const fieldEl = typeof listValue === 'boolean' ?
                                formEl.querySelector('[name="'+ name +'"]') : 
                                formEl.querySelector('[name="'+ name +'"][value="'+ listValue +'"]');
                if( fieldEl ){
                    fieldEl.checked = true;
                }
            });

        } else {

            const fieldEl = formEl.querySelector('[name="'+ name +'"]');
            if( fieldEl && (!skipFilledFields || fieldEl.value === '') ){
                fieldEl.value = keyValue;
            }
        }

    });

    return formEl;

}
