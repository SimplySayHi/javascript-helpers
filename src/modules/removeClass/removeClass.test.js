
import removeClass from './removeClass';

describe( 'Remove Class', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock" class="mock-class-1 mock-class-2 mock-class-3"></div>';
    } );

    test( 'Remove 1 css class from an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        removeClass( el, 'mock-class-1' );
        const expectTest = el.classList.contains( 'mock-class-1' );
        expect( expectTest ).toBe( false );
    } );

    test( 'Remove multiple css classes from an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        removeClass( el, 'mock-class-1 mock-class-2' );
        const expectTest = el.classList.contains( 'mock-class-1' ) && el.classList.contains( 'mock-class-2' );
        expect( expectTest ).toBe( false );
    } );

    test( 'Passing only 1 argument ( node element )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        removeClass( el );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
    } );

    test( 'Passing only 1 argument ( css class )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        removeClass( 'mock-class-1' );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
    } );

    test( 'Passing element that does not exists', () => {
        let el = document.querySelector( '#non-existent-mock' );
        removeClass( el, 'mock-class-1' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
    } );

    test( 'Passing 0 arguments', () => {
        removeClass();
        //It will not reach this point if it fails
        expect( true ).toEqual( true );
    } );

    test( 'Remove classes form many HTML Elements', () => {
        let el = document.querySelectorAll( '.mock' );
        removeClass( el, 'mock-class-1' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'mock-class-1' )).length === el.length;
        expect( expectTest ).toBe( true );
    } );

    test( 'Many HTML Elements but no classes', () => {
        let el = document.querySelectorAll( '.mock' );
        removeClass( el );
        const expectTest = Array.from(el).filter(el => !el.classList.contains( 'mock-class-1' )).length === el.length;
        expect( expectTest ).toBe( true );
    } );

    test( 'Remove classes from many HTML Elements but elements don\'t exist', () => {
        let el = document.querySelectorAll( '.mock-non-existing' );
        removeClass( el, 'mock-class-1' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
    } );

} );
