
import isEmptyObject from './isEmptyObject';

describe( 'Is Empty Object', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Check with {name: "Valerio"}', () => {
        const expectTest = isEmptyObject( {name: 'Valerio'} );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with IIFE Returning an Object like {name: "Valerio"}', () => {
        const expectTest = isEmptyObject( function(){ return {name: 'Valerio'} }() );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with {}', () => {
        const expectTest = isEmptyObject( {} );
        expect( expectTest ).toEqual( true );
    } );

    test( 'Check with IIFE Returning an Object', () => {
        const expectTest = isEmptyObject( function(){ return {} }() );
        expect( expectTest ).toEqual( true );
    } );

    test( 'Check with DOM Node', () => {
        const el = document.querySelector('#mock');
        const expectTest = isEmptyObject( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with NodeList', () => {
        const el = document.querySelectorAll('.mock');
        const expectTest = isEmptyObject( el );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with []', () => {
        const expectTest = isEmptyObject( [] );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with "hello"', () => {
        const expectTest = isEmptyObject( 'hello' );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with 7', () => {
        const expectTest = isEmptyObject( 7 );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with true', () => {
        const expectTest = isEmptyObject( true );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with null', () => {
        const expectTest = isEmptyObject( null );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with undefined', () => {
        const expectTest = isEmptyObject( undefined );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with function', () => {
        const expectTest = isEmptyObject( function(){} );
        expect( expectTest ).toEqual( false );
    } );

    test( 'Check with 0 arguments', () => {
        const expectTest = isEmptyObject();
        expect( expectTest ).toEqual( false );
    } );

});
