
import setUrlHash from './setUrlHash';

describe( 'Set URL Hash', () => {

    beforeEach(() => {
        window.history.pushState({}, 'Test Title', '/test.html');
    });

    test( 'Hash passed "hello"', () => {
        setUrlHash( 'hello' );
        const expectTest = window.location.hash;
        const expectedResult = '#hello';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'No parameter passed', () => {
        setUrlHash();
        const expectTest = window.location.hash;
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

});
