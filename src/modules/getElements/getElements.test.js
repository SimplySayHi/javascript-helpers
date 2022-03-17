
import getElements from './getElements';

describe( 'Get Elements', () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="mock"><div class="mock-123"></div></div>
            <div class="mock"><div class="mock-123"></div></div>
            <div class="mock"><div class="mock-123"></div></div>
            <div class="mock"><div class="mock-123"></div></div>
        `;
    } );

    test( 'Get Elements from document', () => {
        let el = document;
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( [el] );
    } );

    test( 'Get Elements from NodeList', () => {
        let el = document.querySelectorAll( '.mock' );
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( Array.from(el) );
    } );

    test( 'Get Elements from Array of DOM nodes', () => {
        let el = Array.from(document.querySelectorAll( '.mock' ));
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( Array.from(el) );
    } );

    test( 'Get Elements from Node Element', () => {
        let el = document.querySelector( '.mock' );
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( [el] );
    } );

    test( 'Get Elements from Empty NodeList', () => {
        let el = document.querySelectorAll( '.mock-non-existing' );
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( [] );
    } );

    test( 'Get Elements from Non-existing Element', () => {
        let el = document.querySelector( '.mock-non-existing' );
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( [] );
    } );

    test( 'Get Elements from String Selector', () => {
        let el = '.mock';
        const expectTest = getElements( el );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelectorAll('.mock')) );
    } );

    test( 'Get Elements from String Selector with parent as String Selector', () => {
        let el = '.mock-123';
        const parent = '.mock';
        const expectTest = getElements( el, parent );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelectorAll('.mock .mock-123')) );
    } );

    test( 'Get Elements from String Selector with parent as Element', () => {
        let el = '.mock-123';
        const parent = document.querySelector('.mock');
        const expectTest = getElements( el, parent );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelector('.mock').querySelectorAll('.mock-123')) );
    } );

    test( 'Get Elements from String Selector with parent as NodeList', () => {
        let el = '.mock-123';
        const parent = document.querySelectorAll('.mock');
        const expectTest = getElements( el, parent );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelectorAll('.mock .mock-123')) );
    } );

    test( 'Get Elements from String Selector with parent as Array of DOM nodes', () => {
        let el = '.mock-123';
        const parent = Array.from(document.querySelectorAll('.mock'));
        const expectTest = getElements( el, parent );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelectorAll('.mock .mock-123')) );
    } );

    test( 'Get Elements from String Selector with parent as document', () => {
        let el = '.mock-123';
        const parent = document;
        const expectTest = getElements( el, parent );
        expect( expectTest ).toStrictEqual( Array.from(document.querySelectorAll('.mock-123')) );
    } );

    test( 'No arguments passed', () => {
        const expectTest = getElements();
        expect( expectTest ).toStrictEqual( [] );
    } );

} );
