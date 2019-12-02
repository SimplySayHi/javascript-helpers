
import getAge from './getAge';

describe( 'Get Age', () => {

    const currentDate = new Date().toISOString().split('T')[0];
    const thisMonth = currentDate.split('-')[1];
    const thisYear = currentDate.split('-')[0];
    const age = thisYear - 2000;
    const ageNotValid = -1;

    // DATE MUST BE IN ISO 8601 DATE FORMAT: YYYY-MM-DD | YYYY/MM/DD | YYYY MM DD

    test( 'Date passed as 2000/01/01', () => {
        const expectTest = getAge( '2000/01/01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000-01-01', () => {
        const expectTest = getAge( '2000-01-01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000 01 01', () => {
        const expectTest = getAge( '2000 01 01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000-'+ thisMonth +'-30 (actual current month)', () => {
        const expectTest = getAge( '2000-'+ thisMonth +'-30' );
        const expectedResult = age - 1;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000+01+01 (not valid)', () => {
        const expectTest = getAge( '2000+01+01' );
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2000.01.01', () => {
        const expectTest = getAge( '2000.01.01' );
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed, passed empy string', () => {
        const expectTest = getAge('');
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date not passed', () => {
        const expectTest = getAge();
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

} );
