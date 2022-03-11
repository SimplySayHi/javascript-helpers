
import getElements from '../getElements/getElements.js';

export default ( ancestor, eventName, target, callback, { data, options, useCapture = false } = {} ) => {

    getElements(ancestor).forEach($elem => {
        $elem.addEventListener(
            eventName,
            event => {
                const $element = event.target.closest(target);
                if( $elem.contains($element) ){
                    callback.call($element, event, data);
                }
            },
            options || useCapture
        );
    });

}
