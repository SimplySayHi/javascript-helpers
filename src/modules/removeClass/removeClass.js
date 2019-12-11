
import getElements from '../getElements/getElements.js';

export default ( elements = [], cssClasses = '' ) => {

    elements = getElements(elements);

    if( !cssClasses ){ return elements; }

    elements.forEach(function(elem){
        cssClasses.split(' ').forEach(function(className){
            elem.classList.remove( className );
        });
    });

    return elements;
    
}
