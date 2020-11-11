import replaceTemplateStrings from './replaceTemplateStrings';

describe( 'Replace Template Strings', () => {

    test( 'Replace Template Strings: Pass All Arguments correctly', () => {
        const obj = {
            greeting: 'Hello :D'
        };
        const string = '<div>{{greeting}}</div>';
        const expectTest = replaceTemplateStrings( obj, string );
        const extectedResult = '<div>Hello :D</div>';
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Replace Template Strings: 1st arg not an onject => return original string', () => {
        const obj = [];
        const string = '<div>{{greeting}}</div>';
        const expectTest = replaceTemplateStrings( obj, string );
        const extectedResult = string;
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Replace Template Strings: mising 2nd arg => return empty string', () => {
        const obj = {
            greeting: 'Hello :D'
        };
        const expectTest = replaceTemplateStrings( obj );
        const extectedResult = '';
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Replace Template Strings: 2nd arg not a string => return empty string', () => {
        const obj = {
            greeting: 'Hello :D'
        };
        const string = {};
        const expectTest = replaceTemplateStrings( obj, string );
        const extectedResult = '';
        expect( expectTest ).toEqual( extectedResult );
    } );

});
