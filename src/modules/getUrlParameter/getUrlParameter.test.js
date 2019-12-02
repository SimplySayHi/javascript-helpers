
import getUrlParameter from './getUrlParameter';

describe( 'Get URL Parameter', () => {

    beforeEach(() => {
        window.history.pushState({}, 'Test Title', '/test.html?name=Valerio&website&job=Frontend&location=Milan');
    });

    test( 'Get existing param "job"', () => {
        const expectTest = getUrlParameter( 'job' );
        const expectedResult = 'Frontend';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Get existing param "website" with not defined value', () => {
        const expectTest = getUrlParameter( 'website' );
        const expectedResult = true;
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Get non-existing param "age"', () => {
        const expectTest = getUrlParameter( 'age' );
        const expectedResult = undefined;
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'No parameter name passed', () => {
        const expectTest = getUrlParameter();
        const expectedResult = [
            { name: 'name', value: 'Valerio' },
            { name: 'website', value: true },
            { name: 'job', value: 'Frontend' },
            { name: 'location', value: 'Milan' }
        ];
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'No parameter name passed and URL is without params', () => {
        window.history.pushState({}, 'Test Title', '/test.html');
        const expectTest = getUrlParameter();
        const expectedResult = [];
        expect( expectTest ).toEqual( expectedResult );
    } );

});
