
import isValidDate from './isValidDate';

describe( 'Is Valid Date', () => {

    // DATE MUST BE IN ISO 8601 DATE FORMAT: YYYY-MM-DD | YYYY/MM/DD | YYYY MM DD

    test( 'Date passed as 2000/01/01', () => {
        const expectTest = isValidDate( '2000/01/01' );
        const expectedResult = true;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000-01-01', () => {
        const expectTest = isValidDate( '2000-01-01' );
        const expectedResult = true;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000 01 01', () => {
        const expectTest = isValidDate( '2000 01 01' );
        const expectedResult = true;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000+01+01', () => {
        const expectTest = isValidDate( '2000+01+01' );
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000.01.01', () => {
        const expectTest = isValidDate( '2000.01.01' );
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed, passed empy string', () => {
        const expectTest = isValidDate('');
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as a2000/01/01', () => {
        const expectTest = isValidDate( 'a2000/01/01' );
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000/01/01a', () => {
        const expectTest = isValidDate( '2000/01/01a' );
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed', () => {
        const expectTest = isValidDate();
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

} );
