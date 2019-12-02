
import removeMulitpleWhiteSpaces from './removeMulitpleWhiteSpaces';

describe( 'Remove Multiple WhiteSpaces', () => {

    let text_01 = 'hello. how are you?';
    let text_02 = 'hello . how   are you?     ';
    let text_03 = ' hello . how   are you?     ';
    let text_04 = '   hello . how   are you?     ';

    const text_result = 'hello. how are you?';
    const text_result_02 = 'hello . how are you? ';
    const text_result_03 = ' hello . how are you? ';

    test( 'string -> "'+ text_01 +'"', () => {
        const expectTest = removeMulitpleWhiteSpaces( text_01 );
        expect( expectTest ).toBe( text_result );
    } );

    test( 'string -> "'+ text_02 +'"', () => {
        const expectTest = removeMulitpleWhiteSpaces( text_02 );
        expect( expectTest ).toBe( text_result_02 );
    } );

    test( 'string -> "'+ text_03 +'"', () => {
        const expectTest = removeMulitpleWhiteSpaces( text_03 );
        expect( expectTest ).toBe( text_result_03 );
    } );

    test( 'string -> "'+ text_04 +'"', () => {
        const expectTest = removeMulitpleWhiteSpaces( text_04 );
        expect( expectTest ).toBe( text_result_03 );
    } );

    test( 'No string passed', () => {
        const expectTest = removeMulitpleWhiteSpaces();
        expect( expectTest ).toBe( '' );
    } );

});
