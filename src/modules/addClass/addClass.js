
import getElements from '../getElements/getElements.js';

export default ( elements = [], cssClasses = '' ) => {

    if( !cssClasses ){ return; }

    getElements( elements ).forEach(function(elem){
        cssClasses.split(' ').forEach(function(className){
            elem.classList.add( className );
        });
    });

}
