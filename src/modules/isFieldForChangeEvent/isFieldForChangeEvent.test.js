
import isFieldForChangeEvent from './isFieldForChangeEvent';

describe( 'Check Field for Change Event', () => {

    beforeEach(() => {
        document.body.innerHTML = '<input type="checkbox" name="checkbox-01" />'+
                                    '<input type="radio" name="radio-01" value="1" />'+
                                    '<input type="text" name="text-01" />'+
                                    '<select name="select-01">'+
                                        '<option value="">Choose</option>'+
                                        '<option value="1">1</option>'+
                                        '<option value="2">2</option>'+
                                        '<option value="3">3</option>'+
                                    '</select>';
    } );

    test( 'Check Element: Checkbox', () => {
        let el = document.querySelector( '[type="checkbox"]' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check Element: Radio', () => {
        let el = document.querySelector( '[type="radio"]' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check Element: Select', () => {
        let el = document.querySelector( 'select' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check Element: Input Text', () => {
        let el = document.querySelector( '[type="text"]' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Non existing DOM element', () => {
        let el = document.querySelector( '[type="email"]' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Non existing Node List', () => {
        let el = document.querySelectorAll( '[type="email"]' );
        const expectTest = isFieldForChangeEvent( el );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: ( NOT PASSED )', () => {
        const expectTest = isFieldForChangeEvent();
        expect( expectTest ).toBe( false );
    } );

} );
