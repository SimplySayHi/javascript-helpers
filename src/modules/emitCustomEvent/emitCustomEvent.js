
import getElements from '../getElements/getElements.js';
import mergeObjects from '../mergeObjects/mergeObjects.js';

export default ( elem, eventName, eventOptions ) => {
    eventOptions = mergeObjects({ bubbles: true }, eventOptions);
    const eventObj = new CustomEvent(eventName, eventOptions);
    getElements(elem).forEach($el => {
        $el.dispatchEvent( eventObj );
    });
}
