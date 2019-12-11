
import getElements from '../getElements/getElements.js';

export default ( elements = [], cssClasses = '' ) => {

    elements = getElements( elements );

    if( !cssClasses ){ return elements; }

    elements.forEach(elem => {
        cssClasses.split(' ').forEach(className => {
            elem.classList.add( className );
        });
    });

    return elements;

}
