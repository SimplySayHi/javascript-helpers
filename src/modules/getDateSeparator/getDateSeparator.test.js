
import getDateSeparator from './getDateSeparator';

describe( 'Get Date Separator', () => {

    test( 'Date passed as 12/12/2012', () => {
        const expectTest = getDateSeparator( '12/12/2012' );
        const expectedResult = '/';
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12-12-2012', () => {
        const expectTest = getDateSeparator( '12-12-2012' );
        const expectedResult = '-';
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12 12 2012', () => {
        const expectTest = getDateSeparator( '12 12 2012' );
        const expectedResult = ' ';
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12+12+2012 and checkIso8601separator false', () => {
        const expectTest = getDateSeparator( '12+12+2012', false );
        const expectedResult = '+';
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12+12+2012', () => {
        const expectTest = getDateSeparator( '12+12+2012' );
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12.12.2012', () => {
        const expectTest = getDateSeparator( '12.12.2012' );
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 12122012', () => {
        const expectTest = getDateSeparator( '12+12+2012' );
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as new Date()', () => {
        const expectTest = getDateSeparator( new Date() );
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed, passed empy string', () => {
        const expectTest = getDateSeparator('');
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed', () => {
        const expectTest = getDateSeparator();
        const expectedResult = null;
        expect( expectTest ).toBe( expectedResult );
    } );

} );
