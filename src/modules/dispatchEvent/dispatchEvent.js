
import mergeObjects from '../mergeObjects/mergeObjects.js';

export default ( elem, eventName, eventOptions ) => {
    eventOptions = mergeObjects({}, eventOptions);
    const eventObj = new Event(eventName, { bubbles: true }, eventOptions);
    elem.dispatchEvent( eventObj );
}
