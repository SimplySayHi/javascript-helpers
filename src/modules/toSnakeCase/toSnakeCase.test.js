
import toSnakeCase from './toSnakeCase';

describe( 'To Snake Case', () => {

    test( 'Transform camel-case text into snake-case', () => {
        const expectTest = toSnakeCase( 'testCamelCaseFunction' );
        expect( expectTest ).toBe( 'test_camel_case_function' );
    } );

    test( 'Transform camel-case text ( starting with Capital letter ) into snake-case', () => {
        const expectTest = toSnakeCase( 'TestCamelCaseFunction' );
        expect( expectTest ).toBe( '_test_camel_case_function' );
    } );

    test( 'Transform kebab-case text into snake-case', () => {
        const expectTest = toSnakeCase( 'test-camel-case-function' );
        expect( expectTest ).toBe( 'test_camel_case_function' );
    } );

    test( 'Transform spaced text into snake-case', () => {
        const expectTest = toSnakeCase( 'test camel case function' );
        expect( expectTest ).toBe( 'test_camel_case_function' );
    } );

    test( 'Transform spaced text into snake-case with all caps', () => {
        const expectTest = toSnakeCase( 'test camel case function', true );
        expect( expectTest ).toBe( 'TEST_CAMEL_CASE_FUNCTION' );
    } );

    test( 'Passed "hello"', () => {
        const expectTest = toSnakeCase( 'hello' );
        expect( expectTest ).toBe( 'hello' );
    } );

    test( 'Passed "   hello"', () => {
        const expectTest = toSnakeCase( '   hello' );
        expect( expectTest ).toBe( 'hello' );
    } );

    test( 'Passed empty string', () => {
        const expectTest = toSnakeCase( '' );
        expect( expectTest ).toBe( '' );
    } );

    test( 'no Arguments', () => {
        const expectTest = toSnakeCase();
        expect( expectTest ).toBe( '' );
    } );

});
