
import toPascalCase from './toPascalCase';

describe( 'To Pascal Case', () => {

    test( 'Transform kebab-case text into pascal-case', () => {
        const expectTest = toPascalCase( 'test-pascal-case-function' );
        expect( expectTest ).toBe( 'TestPascalCaseFunction' );
    } );

    test( 'Transform snake-case text into pascal-case', () => {
        const expectTest = toPascalCase( 'test_pascal_case_function' );
        expect( expectTest ).toBe( 'TestPascalCaseFunction' );
    } );

    test( 'Transform spaced text into pascal-case', () => {
        const expectTest = toPascalCase( 'test pascal case function' );
        expect( expectTest ).toBe( 'TestPascalCaseFunction' );
    } );

    test( 'Transform kebab-case text ( starting with "-" ) into pascal-case', () => {
        const expectTest = toPascalCase( '-test-pascal-case-function' );
        expect( expectTest ).toBe( 'TestPascalCaseFunction' );
    } );

    test( 'Passed "hello"', () => {
        const expectTest = toPascalCase( 'hello' );
        expect( expectTest ).toBe( 'Hello' );
    } );

    test( 'Passed "   hello"', () => {
        const expectTest = toPascalCase( '   hello' );
        expect( expectTest ).toBe( 'Hello' );
    } );

    test( 'Passed "h"', () => {
        const expectTest = toPascalCase( 'h' );
        expect( expectTest ).toBe( 'H' );
    } );

    test( 'Passed "H"', () => {
        const expectTest = toPascalCase( 'H' );
        expect( expectTest ).toBe( 'H' );
    } );

    test( 'Passed empty string', () => {
        const expectTest = toPascalCase( '' );
        expect( expectTest ).toBe( '' );
    } );

    test( 'no Arguments', () => {
        const expectTest = toPascalCase();
        expect( expectTest ).toBe( '' );
    } );

});
