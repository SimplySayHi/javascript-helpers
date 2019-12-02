
import ajaxCall from './ajaxCall';

describe('AJAX Call', () => {

    const onResponse = jest.fn();
    const onError = jest.fn();

    beforeEach(() => {
        window.history.pushState({}, 'Test Title', '/index.html');
        fetch.resetMocks();
    });

    test('POST call with body', () => {
        console.log('Accept: application/json');
        /* const response = {
            headers: {
                get: jest.fn(()=> '')
            }
        }; */
        const testOptions = {
            url: 'data.json',
            method: 'POST',
            body: {
                name: 'Valerio',
                email: 'address@email.com'
            }
        };
        const expectedResult = { result: true };
        fetch.mockResponseOnce( JSON.stringify(expectedResult) );

        ajaxCall( testOptions )
            .then(onResponse)
            .then(data => {
                expect( onResponse ).not.toHaveBeenCalled();
                expect( onError ).toHaveBeenCalled();
                expect( data ).toEqual( expectedResult );
            })
            .catch(onError)
            .catch(error => {
                /* THIS SHOULD NEVER HAPPEN */
                console.log('AJAX Error', error);
            });
    });

    test('POST call with body and Url Encoded Form', () => {
        console.log('Accept not set');
        /* const response = {
            headers: {
                get: jest.fn(()=> '')
            }
        }; */
        const testOptions = {
            url: 'data.json',
            method: 'POST',
            body: {name: 'Valerio', email: 'address@email.com'},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        const expectedResult = { result: true };
        fetch.mockResponseOnce( JSON.stringify(expectedResult) );

        ajaxCall( testOptions )
            .then(onResponse)
            .then(data => {
                expect( onResponse ).not.toHaveBeenCalled();
                expect( onError ).toHaveBeenCalled();
                expect( data ).toEqual( expectedResult );
            })
            .catch(onError)
            .catch(error => {
                /* THIS SHOULD NEVER HAPPEN */
                console.log('AJAX Error', error);
            });
    });

    test('POST call with body and Multipart Form', () => {
        /* const response = {
            headers: {
                get: jest.fn(()=> '')
            }
        }; */
        console.log('Accept not set');
        const testOptions = {
            url: 'data.json',
            method: 'POST',
            body: {name: 'Valerio', email: 'address@email.com'},
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        const expectedResult = { result: true };
        fetch.mockResponseOnce( JSON.stringify(expectedResult) );

        ajaxCall( testOptions )
            .then(onResponse)
            .then(data => {
                expect( onResponse ).not.toHaveBeenCalled();
                expect( onError ).toHaveBeenCalled();
                expect( data ).toEqual( expectedResult );
            })
            .catch(onError)
            .catch(error => {
                /* THIS SHOULD NEVER HAPPEN */
                console.log('AJAX Error', error);
            });
    });

    test('GET call with body', () => {
        console.log('Accept: text/html');
        const testOptions = {
            url: 'data.json',
            timeout: 10,
            headers: {
                'Accept': 'text/html'
            },
            body: {name: 'Valerio', email: 'address@email.com'}
        };
        fetch.mockResponseOnce( () => new Promise(resolve => setTimeout(() => resolve({ body: 'ok' }), 1000)) );

        try {
            ajaxCall( testOptions )
                .then(onResponse)
                .then(data => {
                    /* THIS SHOULD NEVER HAPPEN */
                })
                .catch(onError)
                .catch(error => {
                    console.log('AJAX Error', error);
                    expect( onResponse ).not.toHaveBeenCalled();
                    expect( onError ).toHaveBeenCalled();
                });
        } catch( error ){
            throw error;
        }
    });

    test('GET call with parametrized url, body, Delay and Abort Called', () => {
        const testOptions = { url: 'data.json?id=0', timeout: 10, body: {name: 'Valerio', email: 'address@email.com'} };
        fetch.mockResponseOnce( () => new Promise(resolve => setTimeout(() => resolve({ body: 'ok' }), 1000)) );

        try {
            ajaxCall( testOptions )
                .then(onResponse)
                .then(data => {
                    /* THIS SHOULD NEVER HAPPEN */
                })
                .catch(onError)
                .catch(error => {
                    console.log('AJAX Error', error);
                    expect( onResponse ).not.toHaveBeenCalled();
                    expect( onError ).toHaveBeenCalled();
                });
        } catch( error ){
            throw error;
        }
    });

    test('Wrong Url', () => {
        const testOptions = { url: 'aaaa.json' };
        const expectedResult = { result: true };
        fetch.mockResponseOnce( JSON.stringify(expectedResult) );

        ajaxCall( testOptions )
            .then(onResponse)
            .then(data => { /* THIS SHOULD NEVER HAPPEN */ })
            .catch(onError)
            .catch(error => {
                console.log('AJAX Error', error);
                expect( onResponse ).not.toHaveBeenCalled();
                expect( onError ).not.toHaveBeenCalled();
            });
    });

    test('No arguments', () => {
        const expectedResult = undefined;
        fetch.mockResponseOnce( JSON.stringify(expectedResult) );

        ajaxCall()
            .then(onResponse)
            .then(data => {
                expect( onResponse ).toHaveBeenCalled();
                expect( onError ).not.toHaveBeenCalled();
            })
            .catch(onError)
            .catch(error => {
                /* THIS SHOULD NEVER HAPPEN */
                console.log('AJAX Error', error);
            });
    });

});
