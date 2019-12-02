import getElements from "../getElements/getElements";

const fieldsStringSelector = 'input:not([type="reset"]):not([type="submit"]):not([type="button"]):not([type="hidden"]), select, textarea';

export default ( formEl = null ) => {

    let lastFieldName = '',
        lastFieldType = '';

    formEl = getElements(formEl)[0];

    if( !formEl ){ return [] };

    return Array.from( formEl.querySelectorAll(fieldsStringSelector) )
        .filter(fieldEl => {
            const name = fieldEl.name,
                type = fieldEl.type;

            if( name === lastFieldName && type === lastFieldType ){
                return false;
            }
            
            if( !fieldEl.matches('[data-required-from]') ){
                lastFieldName = name;
                lastFieldType = type;
            }
            
            return true;
        });
    
}