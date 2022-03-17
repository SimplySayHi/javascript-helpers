
import addClass from './addClass';

describe( 'Add Class', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Add 1 css class to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        const expectedResult = addClass( el, 'test-class' );
        expect( el.classList.contains( 'test-class' ) ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Add multiple css classes to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        const cssClasses = 'test-class hello world';
        const expectedResult = addClass( el, cssClasses );
        const checkResult = cssClasses.split(' ').reduce((result, cssClass) => {
            if( !el.classList.contains(cssClass) ){
                return false
            }
            return result
        }, true)
        expect( checkResult ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Passing only 1 argument ( node element )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        const expectedResult = addClass( el );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Passing only 1 argument ( a string )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        const expectedResult = addClass( 'test-class' );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Passing element that does not exists', () => {
        let el = document.querySelector( '#non-existent-mock' );
        const expectedResult = addClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Passing 0 arguments', () => {
        const expectedResult = addClass();
        //It will not reach this point if it fails
        expect( true ).toEqual( true );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Add classes to many HTML Elements ( NodeList )', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectedResult = addClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Add classes to many HTML Elements ( Array of HTML Elements )', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        const expectedResult = addClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Many HTML Elements but no classes', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectedResult = addClass( el );
        const expectTest = Array.from(el).filter(el => !el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Add classes to many HTML Elements but elements don\'t exist', () => {
        let el = document.querySelectorAll( '.mock-non-existing' );
        const expectedResult = addClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
        expect( expectedResult ).toEqual( [] );
    } );

} );
