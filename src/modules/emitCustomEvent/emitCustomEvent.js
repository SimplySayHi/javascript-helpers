
import mergeObjects from '../mergeObjects/mergeObjects.js';

export default ( elem, eventName, eventOptions ) => {
    eventOptions = mergeObjects({}, eventOptions);
    const eventObj = new CustomEvent(eventName, { bubbles: true }, eventOptions);
    elem.dispatchEvent( eventObj );
}
