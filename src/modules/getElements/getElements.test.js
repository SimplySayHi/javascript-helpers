
import getElements from './getElements';

describe( 'Get Elements', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="mock"></div><div class="mock"></div><div class="mock"></div><div class="mock"></div>';
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

    test( 'No arguments passed', () => {
        const expectTest = getElements();
        expect( expectTest ).toStrictEqual( [] );
    } );

} );
