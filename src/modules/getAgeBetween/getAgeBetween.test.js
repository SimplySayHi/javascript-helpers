
import getAgeBetween from './getAgeBetween';

describe( 'Get Age Between', () => {

    const thisMonth = new Date().toISOString().split('T')[0].split('-')[1];
    const day = (thisMonth == '02' ? '28' : '30');
    const age = 30;
    const ageNotValid = -1;

    // DATE MUST BE IN ISO 8601 DATE FORMAT: YYYY-MM-DD | YYYY/MM/DD | YYYY MM DD

    test( 'Dates passed as 2018/01/01 and 1988/01/01', () => {
        const expectTest = getAgeBetween( '2018/01/01', '1988/01/01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates passed as 2018-01-01 and 1988-01-01', () => {
        const expectTest = getAgeBetween( '2018-01-01', '1988-01-01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates passed as 2018 01 01 and 1988 01 01', () => {
        const expectTest = getAgeBetween( '2018 01 01', '1988 01 01' );
        const expectedResult = age;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Date passed as 2018-01-01 and 1988-'+ thisMonth +'-'+ day +' (actual current month)', () => {
        const expectTest = getAgeBetween( '2018-01-01', '1988-'+ thisMonth +'-'+ day );
        const expectedResult = age - 1;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates passed as 2018-00-01 and 1988-00-01 (invalida dates)', () => {
        const expectTest = getAgeBetween( '2018-00-01', '1988-00-01' );
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates passed as 2018+01+01 and 1988+01+01 (not valid)', () => {
        const expectTest = getAgeBetween( '2018+01+01', '1988+01+01' );
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates passed as 2018.01.01 and 1988.01.01', () => {
        const expectTest = getAgeBetween( '2018.01.01', '1988.01.01' );
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates not passed, passed empy strings', () => {
        const expectTest = getAgeBetween('', '');
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

    test( 'Dates not passed', () => {
        const expectTest = getAgeBetween();
        const expectedResult = ageNotValid;
        expect( expectTest ).toBe( expectedResult );
    } );

} );
