
import toCamelCase from './toCamelCase';

describe( 'To Camel Case', () => {

    test( 'Transform kebab-case text into camel-case', () => {
        const expectTest = toCamelCase( 'test-camel-case-function' );
        expect( expectTest ).toBe( 'testCamelCaseFunction' );
    } );

    test( 'Transform snake-case text into camel-case', () => {
        const expectTest = toCamelCase( 'test_camel_case_function' );
        expect( expectTest ).toBe( 'testCamelCaseFunction' );
    } );

    test( 'Transform spaced text into camel-case', () => {
        const expectTest = toCamelCase( 'test camel case function' );
        expect( expectTest ).toBe( 'testCamelCaseFunction' );
    } );

    test( 'Transform kebab-case text ( starting with "-" ) into camel-case', () => {
        const expectTest = toCamelCase( '-test-camel-case-function' );
        expect( expectTest ).toBe( 'TestCamelCaseFunction' );
    } );

    test( 'Passed "hello"', () => {
        const expectTest = toCamelCase( 'hello' );
        expect( expectTest ).toBe( 'hello' );
    } );

    test( 'Passed empty string', () => {
        const expectTest = toCamelCase( '' );
        expect( expectTest ).toBe( '' );
    } );

    test( 'no Arguments', () => {
        const expectTest = toCamelCase();
        expect( expectTest ).toBe( '' );
    } );

});
