import getElements from "../getElements/getElements.js";

const fieldsStringSelector = 'input:not([type="reset"]):not([type="submit"]):not([type="button"]):not([type="hidden"]), select, textarea';

export default ( formEl = null ) => {

    let lastFieldName = '';
    let lastFieldType = '';

    const $form = getElements(formEl)[0];

    if( !$form ){ return [] }

    return Array.from( $form.querySelectorAll(fieldsStringSelector) )
        .filter($field => {
            const name = $field.name,
                type = $field.type;

            if( name === lastFieldName && type === lastFieldType ){
                return false;
            }
            
            if( !$field.matches('[data-required-from]') ){
                lastFieldName = name;
                lastFieldType = type;
            }
            
            return true;
        });
    
}