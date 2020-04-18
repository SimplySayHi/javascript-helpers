
import serializeObject from '../../serializeObject/serializeObject.js';

export const transformBody = ( options ) => {
    const isMultipart = options.headers['Content-Type'] === 'multipart/form-data';

    options.method = options.method.toUpperCase();

    if( isMultipart ){
        let formDataMultipart = new FormData();
        
        for(let key in options.body){
            formDataMultipart.append( key, options.body[key] );
        }
        
        options.body = formDataMultipart;
    }

    if( options.method === 'GET' ){
        options.url += ( /\?/.test(options.url) ? '&' : '?' ) + serializeObject( options.body );
        if( options.cache === false ){
            options.url +=  (/\&/.test(options.url) ? '&' : '') + '_=' + (new Date().getTime());
        }
    }

    if( !isMultipart ){
        options.body = JSON.stringify(options.body);
    }

    return options;
}
