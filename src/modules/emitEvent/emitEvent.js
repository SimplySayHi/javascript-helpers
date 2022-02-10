
import getElements from '../getElements/getElements.js';

export default ( elem, eventName, eventOptions ) => {
    const options = Object.assign( { bubbles: true }, eventOptions );
    const eventObj = new Event(eventName, options);
    getElements(elem).forEach($el => {
        $el.dispatchEvent( eventObj );
    });
}
