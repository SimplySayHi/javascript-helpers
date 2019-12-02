
import serializeObject from '../../serializeObject/serializeObject.js';

export const transformBody = ( options ) => {
    const isMultipart = options.headers['Content-Type'] === 'multipart/form-data';
    const isUrlEncodedForm = options.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') > -1;

    options.method = options.method.toUpperCase();

    if( options.method === 'GET' ){

        // FETCH WITH "GET" METHOD CAN'T HAVE "body". SO IT IS APPENDED TO THE URL
        if( options.body ){
            options.url += ( /\?/.test(options.url) ? '&' : '?' ) + serializeObject( options.body );
        }
        delete options.body;

    } else {

        options.body = (isUrlEncodedForm ? serializeObject( options.body ) : (!isMultipart ? JSON.stringify(options.body) : options.body));

    }

    return options;
}
