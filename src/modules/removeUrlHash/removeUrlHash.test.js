
import removeUrlHash from './removeUrlHash';

describe( 'Remove URL Hash', () => {

    test( 'Test to remove url hash', () => {
        window.history.pushState({}, 'Test Title', '/test.html#hello');
        removeUrlHash();
        const expectTest = window.location.hash;
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Test to remove url hash but it\'s not present', () => {
        window.history.pushState({}, 'Test Title', '/test.html');
        removeUrlHash();
        const expectTest = window.location.hash;
        const expectedResult = '';
        expect( expectTest ).toEqual( expectedResult );
    } );

});
