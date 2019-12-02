
import checkFormElement from './checkFormElement';

describe( 'Check Form Element', () => {

    beforeEach(() => {
        document.body.innerHTML = `<form name="my-form"></form>`;
    } );

    test( 'Form is an Existing HTML Element', () => {
        let el = document.querySelector( 'form' );
        const expectTest = checkFormElement( el );
        const expectedResult = {
            result: true,
            element: el
        };
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form is a CSS String Selector for the Form', () => {
        const expectTest = checkFormElement( 'form' );
        const expectedResult = {
            result: true,
            element: document.querySelector('form')
        };
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form is a non-existing HTML Element', () => {
        let el = document.querySelector( 'form[name="non-existing-form"]' );
        const expectTest = checkFormElement( el );
        const expectedResult = {
            result: false,
            element: null
        };
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form is not passed', () => {
        const expectTest = checkFormElement();
        const expectedResult = {
            result: false,
            element: null
        };
        expect( expectTest ).toEqual( expectedResult );
    } );

} );
