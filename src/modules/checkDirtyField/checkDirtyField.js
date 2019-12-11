
import addClass     from '../addClass/addClass.js';
import getElements  from '../getElements/getElements.js';
import removeClass  from '../removeClass/removeClass.js';

export default ( fields = [], cssClasses = '' ) => {

    if( !cssClasses ){ return; }
    
    getElements(fields).forEach(fieldEl => {
        if( fieldEl.type !== 'checkbox' && fieldEl.type !== 'radio' ){
            let containerEl = fieldEl.closest('[data-formjs-question]') || fieldEl;

            if( fieldEl.value ){
                
                addClass( containerEl, cssClasses );
                
            } else {
                
                removeClass( containerEl, cssClasses );
                
            }
        }
    });
    
}
