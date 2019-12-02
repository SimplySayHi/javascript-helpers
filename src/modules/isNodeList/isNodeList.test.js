
import isNodeList from './isNodeList';

describe( 'NodeList', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'isNodeList with Real Node List', () => {
        const el = document.querySelectorAll('.mock');
        const expectTest = isNodeList( el );
        expect( expectTest ).toEqual( true );
    } );

    test( 'isNodeList with Empty Node List', () => {
        const el = document.querySelectorAll('.mock-not-existing');
        const expectTest = isNodeList( el );
        expect( expectTest ).toEqual( true );
    } );

    test( 'isNodeList with DOM Node', () => {
        const el = document.querySelector('.mock');
        const expectTest = isNodeList( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element {}', () => {
        const expectTest = isNodeList( {} );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element []', () => {
        const expectTest = isNodeList( [] );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element "hello"', () => {
        const expectTest = isNodeList( 'hello' );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element 7', () => {
        const expectTest = isNodeList( 7 );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element true', () => {
        const expectTest = isNodeList( true );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element null', () => {
        const expectTest = isNodeList( null );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with non-nodelist element undefined', () => {
        const expectTest = isNodeList( undefined );
        expect( expectTest ).toEqual( false );
    } );

    test( 'isNodeList with 0 arguments', () => {
        const expectTest = isNodeList();
        expect( expectTest ).toEqual( false );
    } );

});
