
import mergeObjects         from '../mergeObjects/mergeObjects.js';
import { defaultOptions }   from './utils/defaultOptions.js';
import { parseResponse }    from './utils/parseResponse.js';
import { transformBody }    from './utils/transformBody.js';

export default ( options ) => {
    return new Promise((resolve, reject) => {
        let timeoutTimer;

        options = mergeObjects({}, defaultOptions, options);
        options = transformBody( options );

        let XHR = new XMLHttpRequest();
        const isMultipart = options.headers['Content-Type'] === 'multipart/form-data';
        const
            successFn = (e) => {
                const xhr = e.target;

                if( xhr.status === 200 ){
                    const responseData = parseResponse(xhr);
                    resolve(responseData);
                } else {
                    errorFn(e);
                }
            },
            errorFn = (e) => {
                let xhr = e.target;
                reject(xhr);
            },
            completeFn = (e) => {
                if( timeoutTimer ){
                    window.clearTimeout(timeoutTimer);
                }
            };
        
        XHR.addEventListener('load',    successFn, false);
        XHR.addEventListener('error',   errorFn,    false);
        XHR.addEventListener('loadend', completeFn,  false);

        if( isMultipart ){
            options.async = true;
        }
        
        XHR.open(options.method, options.url, options.async, options.username, options.password);

        if ( options.xhrFields ) {
            for ( let i in options.xhrFields ) {
                XHR[ i ] = options.xhrFields[ i ];
            }
        }

        if ( options.mimeType && XHR.overrideMimeType ) {
            XHR.overrideMimeType( options.mimeType );
        }
        
        for( let h in options.headers ){
            XHR.setRequestHeader( h, options.headers[h] );
        }
        
        XHR.send( (options.method === 'GET' ? null : options.body) );

        if ( options.async && options.timeout > 0 ) {
            timeoutTimer = window.setTimeout(() => {
                XHR.abort();
            }, options.timeout);
        }
    });
}
