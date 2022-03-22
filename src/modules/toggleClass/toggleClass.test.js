
import toggleClass from './toggleClass';

describe( 'Toggle Class', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
    } );

    test( 'Toggle (add) 1 css class to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        const expectedResult = toggleClass( el, 'test-class' );
        expect( el.classList.contains( 'test-class' ) ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (add & force=true) 1 css class to an HTML Element (class not present)', () => {
        let el = document.querySelector( '#mock' );
        const expectedResult = toggleClass( el, 'test-class', true );
        expect( el.classList.contains( 'test-class' ) ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (add & force=true) 1 css class to an HTML Element (class present)', () => {
        let el = document.querySelector( '#mock' );
        el.classList.add('test-class');
        const expectedResult = toggleClass( el, 'test-class', true );
        expect( el.classList.contains( 'test-class' ) ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (remove) 1 css class to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        el.classList.add('test-class');
        const expectedResult = toggleClass( el, 'test-class' );
        expect( el.classList.contains( 'test-class' ) ).toBe( false );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (remove & force=false) 1 css class to an HTML Element (class not present)', () => {
        let el = document.querySelector( '#mock' );
        const expectedResult = toggleClass( el, 'test-class', false );
        expect( el.classList.contains( 'test-class' ) ).toBe( false );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (remove & force=false) 1 css class to an HTML Element (class present)', () => {
        let el = document.querySelector( '#mock' );
        el.classList.add('test-class');
        const expectedResult = toggleClass( el, 'test-class', false );
        expect( el.classList.contains( 'test-class' ) ).toBe( false );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (add) multiple css classes to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        const cssClasses = 'test-class hello world';
        const expectedResult = toggleClass( el, cssClasses );
        const checkResult = cssClasses.split(' ').reduce((result, cssClass) => {
            if( !el.classList.contains(cssClass) ){
                return false
            }
            return result
        }, true)
        expect( checkResult ).toBe( true );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Toggle (remove) multiple css classes to an HTML Element', () => {
        let el = document.querySelector( '#mock' );
        const cssClasses = 'test-class hello world';
        el.classList.add(...cssClasses.split(' '));
        const expectedResult = toggleClass( el, cssClasses );
        const checkResult = cssClasses.split(' ').reduce((result, cssClass) => {
            if( !el.classList.contains(cssClass) ){
                return false
            }
            return result
        }, true)
        expect( checkResult ).toBe( false );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Passing only 1 argument ( node element )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        const expectedResult = toggleClass( el );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
        expect( expectedResult ).toEqual( [el] );
    } );

    test( 'Passing only 1 argument ( a string )', () => {
        let el = document.querySelector( '#mock' );
        const classList = [ ...el.classList];
        const expectedResult = toggleClass( 'test-class' );
        //It will not reach this point if it fails
        expect( classList ).toEqual( [...el.classList] );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Passing element that does not exists', () => {
        let el = document.querySelector( '#non-existent-mock' );
        const expectedResult = toggleClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Passing 0 arguments', () => {
        const expectedResult = toggleClass();
        //It will not reach this point if it fails
        expect( true ).toEqual( true );
        expect( expectedResult ).toEqual( [] );
    } );

    test( 'Toggle (add) class to many HTML Elements ( NodeList )', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectedResult = toggleClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (remove) class to many HTML Elements ( NodeList )', () => {
        let el = document.querySelectorAll( '.mock' );
        Array.from(el).forEach($el => $el.classList.add('test-class'))
        const expectedResult = toggleClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( false );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (add & force=true) class to many HTML Elements ( NodeList )', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectedResult = toggleClass( el, 'test-class', true );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (remove & force=false) class to many HTML Elements ( NodeList )', () => {
        let el = document.querySelectorAll( '.mock' );
        Array.from(el).forEach($el => $el.classList.add('test-class'))
        const expectedResult = toggleClass( el, 'test-class', false );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( false );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (add) class to many HTML Elements ( Array of HTML Elements )', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        const expectedResult = toggleClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (remove) class to many HTML Elements ( Array of HTML Elements )', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        el.forEach($el => $el.classList.add('test-class'))
        const expectedResult = toggleClass( el, 'test-class' );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( false );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (add & force=true) class to many HTML Elements ( Array of HTML Elements )', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        const expectedResult = toggleClass( el, 'test-class', true );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle (remove & force=false) class to many HTML Elements ( Array of HTML Elements )', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        el.forEach($el => $el.classList.add('test-class'))
        const expectedResult = toggleClass( el, 'test-class', false );
        const expectTest = Array.from(el).filter(el => el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( false );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Many HTML Elements but no classes', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectedResult = toggleClass( el );
        const expectTest = Array.from(el).filter(el => !el.classList.contains( 'test-class' )).length === el.length;
        expect( expectTest ).toBe( true );
        expect( expectedResult ).toEqual( Array.from(el) );
    } );

    test( 'Toggle classes to many HTML Elements but elements don\'t exist', () => {
        let el = document.querySelectorAll( '.mock-non-existing' );
        const expectedResult = toggleClass( el, 'test-class' );
        //It will not reach this point if it fails
        expect( true ).toBe( true );
        expect( expectedResult ).toEqual( [] );
    } );

} );
