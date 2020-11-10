
import getElements from '../getElements/getElements.js';

export default ( eventName, {$ancestor, target, data, useCapture = false}, callback ) => {

    getElements($ancestor).forEach($anc => {
        $anc.addEventListener(
            eventName,
            event => {
                const $target = event.target.closest(target);
                if( $anc.contains($target) ){
                    callback.call($target, event, data);
                }
            },
            useCapture
        );
    });

}
