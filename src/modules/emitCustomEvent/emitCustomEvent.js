
import getElements from '../getElements/getElements.js';

export default ( elem, eventName, eventOptions ) => {
    const options = Object.assign( { bubbles: true }, eventOptions );
    const eventObj = new CustomEvent(eventName, options);
    getElements(elem).forEach($el => {
        $el.dispatchEvent( eventObj );
    });
}
