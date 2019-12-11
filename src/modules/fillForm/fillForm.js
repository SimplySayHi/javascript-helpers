
import isEmptyObject from '../isEmptyObject/isEmptyObject.js';
import getElements from '../getElements/getElements.js';

const fieldsStringSelector = 'input:not([type="reset"]):not([type="submit"]):not([type="button"]):not([type="hidden"]), select, textarea';

export default ( formEl = null, data = {}, skipFilledFields = false ) => {

    formEl = getElements(formEl)[0];

    if( !formEl || !data || isEmptyObject(data) ){ return; }

    Array.from( formEl.querySelectorAll(fieldsStringSelector) ).forEach(fieldEl => {
        const name = fieldEl.name;

        if( typeof data[name] !== 'undefined' ){

            let value = data[name];
            const type = fieldEl.type,
                  isCheckbox = type === 'checkbox',
                  isRadio = type === 'radio';

            if( isCheckbox || isRadio ){

                if( isRadio ){

                    fieldEl = formEl.querySelector('[name="'+ name +'"][value="'+ value +'"]');

                } else if( fieldEl.matches('[data-checks]') ) {

                    if( value.indexOf(fieldEl.value) === -1 ){
                        fieldEl = null;
                    }

                }

                if( fieldEl ){
                    fieldEl.checked = value;
                }

            } else if( !skipFilledFields || fieldEl.value === '' ) {

                fieldEl.value = value;

            }

        }
    });

    return formEl;

}
