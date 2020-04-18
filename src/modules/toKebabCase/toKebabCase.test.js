
import toKebabCase from './toKebabCase';

describe( 'To Kebab Case', () => {

    test( 'Transform camel-case text into kebab-case', () => {
        const expectTest = toKebabCase( 'testCamelCaseFunction' );
        expect( expectTest ).toBe( 'test-camel-case-function' );
    } );

    test( 'Transform camel-case text ( starting with "-" ) into kebab-case', () => {
        const expectTest = toKebabCase( 'TestCamelCaseFunction' );
        expect( expectTest ).toBe( '-test-camel-case-function' );
    } );

    test( 'Transform snake-case text into kebab-case', () => {
        const expectTest = toKebabCase( 'test_camel_case_function' );
        expect( expectTest ).toBe( 'test-camel-case-function' );
    } );

    test( 'Transform spaced text into kebab-case', () => {
        const expectTest = toKebabCase( 'test camel case function' );
        expect( expectTest ).toBe( 'test-camel-case-function' );
    } );

    test( 'Transform spaced text into kebab-case with all caps', () => {
        const expectTest = toKebabCase( 'test camel case function', true );
        expect( expectTest ).toBe( 'TEST-CAMEL-CASE-FUNCTION' );
    } );

    test( 'Passed "hello"', () => {
        const expectTest = toKebabCase( 'hello' );
        expect( expectTest ).toBe( 'hello' );
    } );

    test( 'Passed "   hello"', () => {
        const expectTest = toKebabCase( '   hello' );
        expect( expectTest ).toBe( 'hello' );
    } );

    test( 'Passed empty string', () => {
        const expectTest = toKebabCase( '' );
        expect( expectTest ).toBe( '' );
    } );

    test( 'no Arguments', () => {
        const expectTest = toKebabCase();
        expect( expectTest ).toBe( '' );
    } );

});
