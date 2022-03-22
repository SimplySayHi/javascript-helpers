
import getElements from '../getElements/getElements.js';

export default ( elements, cssClasses, force ) => {

    const elemList = getElements( elements );

    if( !cssClasses ){ return elemList; }

    elemList.forEach($elem => {
        cssClasses.split(' ').forEach(className => {
            $elem.classList.toggle( className, force );
        })
    });

    return elemList;

}
