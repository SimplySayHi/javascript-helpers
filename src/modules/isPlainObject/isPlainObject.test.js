
import isPlainObject from './isPlainObject';

describe( 'Is Plain Object', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Check with {}', () => {
        const expectTest = isPlainObject( {} );
        expect( expectTest ).toEqual( true );
    } );

    test( 'Check with IIFE Returning an Object', () => {
        const expectTest = isPlainObject( function(){ return {} }() );
        expect( expectTest ).toEqual( true );
    } );

    test( 'Check with DOM Node', () => {
        const el = document.querySelector('#mock');
        const expectTest = isPlainObject( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with NodeList', () => {
        const el = document.querySelectorAll('.mock');
        const expectTest = isPlainObject( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with []', () => {
        const expectTest = isPlainObject( [] );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with "hello"', () => {
        const expectTest = isPlainObject( 'hello' );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with 7', () => {
        const expectTest = isPlainObject( 7 );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with true', () => {
        const expectTest = isPlainObject( true );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with null', () => {
        const expectTest = isPlainObject( null );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with undefined', () => {
        const expectTest = isPlainObject( undefined );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with function', () => {
        const expectTest = isPlainObject( function(){} );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with 0 arguments', () => {
        const expectTest = isPlainObject();
        expect( expectTest ).toEqual( false );
    } );

});
