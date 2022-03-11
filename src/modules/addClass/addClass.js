
import getElements from '../getElements/getElements.js';

export default ( elements, cssClasses ) => {

    const elemList = getElements( elements );

    if( !cssClasses ){ return elemList; }

    elemList.forEach($elem => {
        $elem.classList.add( ...cssClasses.split(' ') );
    });

    return elemList;

}
