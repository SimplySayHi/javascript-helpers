
import getElements from '../getElements/getElements.js';
import mergeObjects from '../mergeObjects/mergeObjects.js';

export default ( elem, eventName, eventOptions ) => {
    const options = mergeObjects({ bubbles: true }, eventOptions);
    const eventObj = new CustomEvent(eventName, options);
    getElements(elem).forEach($el => {
        $el.dispatchEvent( eventObj );
    });
}
