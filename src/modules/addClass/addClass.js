
import getElements from '../getElements/getElements.js';

export default ( elements, cssClasses ) => {

    const elemList = getElements( elements );

    if( !cssClasses ){ return elemList; }

    elemList.forEach($elem => {
        cssClasses.split(' ').forEach(className => {
            $elem.classList.add( className );
        });
    });

    return elemList;

}
