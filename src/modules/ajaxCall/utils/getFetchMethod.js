
export const getFetchMethod = ( response, options ) => {

    const accept = options.headers.get('Accept');
    const contentType = response.headers.get('Content-Type');
    const headerOpt = accept || contentType || '';

    if( headerOpt.indexOf('application/json') > -1 || headerOpt === '' ){
        return 'json';
    } else if( headerOpt.indexOf('text/') > -1 ){
        return 'text';
    } else {
        return 'blob';
    }

}
