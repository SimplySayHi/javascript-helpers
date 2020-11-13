
import getElements from '../getElements/getElements.js';

export default ( {ancestor, target, data, useCapture = false}, eventName, callback ) => {

    getElements(ancestor).forEach($anc => {
        $anc.addEventListener(
            eventName,
            event => {
                const $element = event.target.closest(target);
                if( $anc.contains($element) ){
                    callback.call($element, event, data);
                }
            },
            useCapture
        );
    });

}
