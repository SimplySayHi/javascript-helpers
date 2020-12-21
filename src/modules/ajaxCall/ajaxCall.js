
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

import mergeObjects         from '../mergeObjects/mergeObjects.js';
import { defaultOptions }   from './utils/defaultOptions.js';
import { getFetchMethod }   from './utils/getFetchMethod.js';
import { transformBody }    from './utils/transformBody.js';

const runFetch = (options, timeoutTimer) => {    
    return fetch( options.url, options )
    .then(response => {
        if( !response.ok ){
            // return Promise.reject(response);
            throw new Error(response.statusText);
        }
        const fetchMethod = getFetchMethod( response, options );
        return response[fetchMethod]();
    })
    .finally(() => {
        if( timeoutTimer ){
            window.clearTimeout( timeoutTimer );
        }
    });
};

export default ( options = {}, canAbortOrController = false ) => {
    const canAbort = !!canAbortOrController;
    const hasController = canAbortOrController.signal;
    const controller = hasController ? canAbortOrController : (options.timeout > 0 || canAbort ? new AbortController() : undefined);
    let timeoutTimer;

    options = mergeObjects({}, defaultOptions, options);
    options = transformBody( options );
    options.headers = new Headers( options.headers );

    if( controller ){
        options.signal = controller.signal;

        if( options.timeout > 0 ){
            timeoutTimer = window.setTimeout(() => {
                controller.abort();
            }, options.timeout);
        }
    }

    return (
        canAbort ?
        {
            abort: () => controller.abort(),
            ready: runFetch( options, timeoutTimer )
        }
        :
        runFetch( options, timeoutTimer )
    )
}
