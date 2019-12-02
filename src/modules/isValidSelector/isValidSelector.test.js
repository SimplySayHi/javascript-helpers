
import isValidSelector from './isValidSelector';

describe( 'Is Valid Selector', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Check valid selector and existring elements', () => {
        const expectTest = isValidSelector( '.mock' );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check valid selector and non-existring elements', () => {
        const expectTest = isValidSelector( '.mock-non-existring' );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check invalid selector "è+"', () => {
        const expectTest = isValidSelector( 'è+' );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check invalid selector ""', () => {
        const expectTest = isValidSelector( '' );
        expect( expectTest ).toBe( false );
    } );

    test( 'No arguments passed', () => {
        const expectTest = isValidSelector();
        expect( expectTest ).toBe( false );
    } );

} );
