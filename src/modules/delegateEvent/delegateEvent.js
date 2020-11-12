
import getElements from '../getElements/getElements.js';

export default ( eventName, {$ancestor, selector, data, useCapture = false}, callback ) => {

    getElements($ancestor).forEach($anc => {
        $anc.addEventListener(
            eventName,
            event => {
                const $target = event.target.closest(selector);
                if( $anc.contains($target) ){
                    callback.call($target, event, data);
                }
            },
            useCapture
        );
    });

}
