
import addClass from './addClass';

describe( 'Add Class', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Add classes to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        addClass( el, 'test-class' );
        expect( el.classList.contains( 'test-class' ) ).toBe( true );
    } );

    test( 'Passing only 1 argument ( node element )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        addClass( el );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
    } );

    test( 'Passing only 1 argument ( a string )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        addClass( 'test-class' );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
    } );

    test( 'Passing element that does not exists', () => {
        let el = document.querySelector( '#non-existent-mock' );
        addClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
    } );

    test( 'Passing 0 arguments', () => {
        addClass();
        //It will not reach this point if it fails
        expect( true ).toEqual( true );
    } );

    test( 'Add classes to many HTML Elements', () => {
        let el = document.querySelectorAll( '.mock' );
        addClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
    } );

    test( 'Many HTML Elements but no classes', () => {
        let el = document.querySelectorAll( '.mock' );
        addClass( el );
        const expectTest = Array.from(el).filter(el => !el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
    } );

    test( 'Add classes to many HTML Elements but elements don\'t exist', () => {
        let el = document.querySelectorAll( '.mock-non-existing' );
        addClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
    } );

} );
