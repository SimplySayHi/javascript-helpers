
import serializeObject from './serializeObject';

describe( 'Serialize Object', () => {

    const data = {
        "name": "Valerio",
        "username": "valerio123",
        "email": "name@email.com",
        "websiteUrl": "http://www.google.com",
        "message": "how are you?",
        "radio-list-1": "3",
        "radio-list-1-more": "hi",
        "privacyCheck": "accept",
        "regulationCheck": true
    };

    test( 'Serialize Object with Real Object Data', () => {
        const expectTest = serializeObject( data );
        const expectedResult = 'name=Valerio&username=valerio123&email=name%40email.com&websiteUrl=http%3A%2F%2Fwww.google.com&message=how%20are%20you%3F&radio-list-1=3&radio-list-1-more=hi&privacyCheck=accept&regulationCheck=true';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Passing a wrong type of object => []', () => {
        const expectTest = serializeObject( [] );
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Passing a wrong type of object => "hello"', () => {
        const expectTest = serializeObject( 'hello' );
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Passing a wrong type of object => 7', () => {
        const expectTest = serializeObject( 7 );
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Passing a wrong type of object => null', () => {
        const expectTest = serializeObject( null );
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Passing no arguments', () => {
        const expectTest = serializeObject();
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

});
