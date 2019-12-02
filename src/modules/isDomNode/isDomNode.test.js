
import isDomNode from './isDomNode';

describe( 'DOM Node', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'isDomNode with Real DOM Node', () => {
        const el = document.querySelector('#mock');
        const expectTest = isDomNode( el );
        expect( expectTest ).toEqual( true );
    } );

    test( 'isDomNode with Non-Existing DOM Node', () => {
        const el = document.querySelector('#mock-not-existing');
        const expectTest = isDomNode( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with NodeList', () => {
        const el = document.querySelectorAll('.mock');
        const expectTest = isDomNode( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element {}', () => {
        const expectTest = isDomNode( {} );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element []', () => {
        const expectTest = isDomNode( [] );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element "hello"', () => {
        const expectTest = isDomNode( 'hello' );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element 7', () => {
        const expectTest = isDomNode( 7 );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element true', () => {
        const expectTest = isDomNode( true );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element null', () => {
        const expectTest = isDomNode( null );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with non-dom-node element undefined', () => {
        const expectTest = isDomNode( undefined );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isDomNode with 0 arguments', () => {
        const expectTest = isDomNode();
        expect( expectTest ).toEqual( false );
    } );

});
