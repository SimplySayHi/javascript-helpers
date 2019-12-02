
import checkDirtyField from './checkDirtyField';

describe( 'Check Dirty Field', () => {

    beforeEach(() => {
        document.body.innerHTML = '<input type="checkbox" name="checkbox-01" checked />'+
                                    '<input type="checkbox" name="checkbox-02" />'+
                                    '<input type="radio" name="radio-01" value="1" />'+
                                    '<input type="radio" name="radio-02" value="" />'+
                                    '<input type="text" name="text-01" value="hello" />'+
                                    '<input type="text" name="text-02" />'+
                                    '<select name="select-01">'+
                                        '<option value="">Choose</option>'+
                                        '<option value="1" selected>1</option>'+
                                        '<option value="2">2</option>'+
                                        '<option value="3">3</option>'+
                                    '</select>'+
                                    '<select name="select-02">'+
                                        '<option value="">Choose</option>'+
                                        '<option value="1">1</option>'+
                                        '<option value="2">2</option>'+
                                        '<option value="3">3</option>'+
                                    '</select>';
    } );

    const cssClass = 'is-dirty';
    const cssClasses = 'is-dirty is-dirty-02';

    test( 'Check Element: Text 01 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="text-01"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check Element: Text 02 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="text-02"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Checkbox 01 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="checkbox-01"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Checkbox 02 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="checkbox-02"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Radio 01 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="radio-01"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Radio 02 | CSS class: ' + cssClass, () => {
        let el = document.querySelector( '[name="radio-02"]' );
        checkDirtyField( el, cssClass );
        
        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Select 01', () => {
        let el = document.querySelector( 'select[name="select-01"]' );
        checkDirtyField( el, cssClass );

        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( true );
    } );

    test( 'Check Element: Select 02', () => {
        let el = document.querySelector( 'select[name="select-02"]' );
        checkDirtyField( el, cssClass );

        const expectTest = el.classList.contains( cssClass );
        expect( expectTest ).toBe( false );
    } );

    test( 'Check Element: Non existing DOM element', () => {
        let el = document.querySelector( '[type="email"]' );
        checkDirtyField( el, cssClass );

        expect( true ).toBe( true );
    } );

    test( 'Check Element: Non existing Node List', () => {
        let el = document.querySelectorAll( '[type="email"]' );
        checkDirtyField( el, cssClass );

        expect( true ).toBe( true );
    } );

    test( 'Check Element: ( Element NOT PASSED )', () => {
        checkDirtyField();
        expect( true ).toBe( true );
    } );

    test( 'Check Element: Text 01 | CSS class: not passed', () => {
        let el = document.querySelector( '[name="text-01"]' );
        checkDirtyField( el );
        
        expect( true ).toBe( true );
    } );


    test( 'Check Element: Text 01 | CSS classes: ' + cssClasses, () => {
        let el = document.querySelector( '[name="text-01"]' );
        checkDirtyField( el, cssClasses );
        
        const classesList = cssClasses.split(' ');
        const expectTest = el.classList.contains( classesList[0] ) && el.classList.contains( classesList[1] );
        expect( expectTest ).toBe( true );
    } );

} );
