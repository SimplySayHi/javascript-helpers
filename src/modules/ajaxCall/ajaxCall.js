
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

import mergeObjects         from '../mergeObjects/mergeObjects.js';
import { defaultOptions }   from './utils/defaultOptions.js';
import { getFetchMethod }   from './utils/getFetchMethod.js';
import { transformBody }    from './utils/transformBody.js';

export default ( options ) => {
    let timeoutTimer;

    options = mergeObjects({}, defaultOptions, options);
    options = transformBody( options );
    options.headers = new Headers( options.headers );

    if ( options.timeout > 0 ) {
        const controller = new AbortController();

        options.signal = controller.signal;

        timeoutTimer = window.setTimeout(() => {
            controller.abort();
        }, options.timeout);
    }

    return fetch( options.url, options )
        .then(response => {

            if( !response.ok ){
                return Promise.reject(response);
            }

            const fetchMethod = getFetchMethod( response, options );
            return response[fetchMethod]();

        })
        .finally(() => {

            if( timeoutTimer ){
                window.clearTimeout( timeoutTimer );
            }

        });
}
