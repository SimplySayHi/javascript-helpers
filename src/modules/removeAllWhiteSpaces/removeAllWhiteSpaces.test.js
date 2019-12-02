
import removeAllWhiteSpaces from './removeAllWhiteSpaces';

describe( 'Remove All WhiteSpaces', () => {

    let text_01 = 'hello. how are you?';
    let text_02 = 'hello . how   are you?     ';
    let text_03 = ' hello . how   are you?     ';
    let text_04 = '   hello . how   are you?     ';
    
    const text_result = 'hello.howareyou?';

    test( 'string -> "'+ text_01 +'"', () => {
        const expectTest = removeAllWhiteSpaces( text_01 );
        expect( expectTest ).toBe( text_result );
    } );

    test( 'string -> "'+ text_02 +'"', () => {
        const expectTest = removeAllWhiteSpaces( text_02 );
        expect( expectTest ).toBe( text_result );
    } );

    test( 'string -> "'+ text_03 +'"', () => {
        const expectTest = removeAllWhiteSpaces( text_03 );
        expect( expectTest ).toBe( text_result );
    } );

    test( 'string -> "'+ text_04 +'"', () => {
        const expectTest = removeAllWhiteSpaces( text_04 );
        expect( expectTest ).toBe( text_result );
    } );

    test( 'No string passed', () => {
        const expectTest = removeAllWhiteSpaces();
        expect( expectTest ).toBe( '' );
    } );

});
