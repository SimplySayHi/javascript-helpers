
import fillForm from './fillForm';

describe( 'Fill Form', () => {

    beforeEach(() => {
        document.body.innerHTML = `<form name="my-form">
                                        <div data-formjs-question>
                                            <input name="name" type="text" data-length="[3,20]" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="email" type="email" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="radio-list-1" type="radio" value="1" />
                                            <input name="radio-list-1" type="radio" value="2" />
                                            <input name="radio-list-1" type="radio" value="3" data-require-more="" id="req-more-1" />
                                            <input name="radio-list-1-more" type="text" data-required-from="#req-more-1" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="contactPrefCheck" type="checkbox" value="sms" data-checks="[1,2]" />
                                            <input name="contactPrefCheck" type="checkbox" value="email" />
                                            <input name="contactPrefCheck" type="checkbox" value="app-notification" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="share-my-infos" type="checkbox" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="privacyCheck" type="radio" value="accepted" />
                                            <input name="privacyCheck" type="radio" value="" />
                                        </div>
                                    </form>`;
    } );

    test( 'Test 1 with Data Object', () => {
        let el = document.querySelector( 'form' );
        const data = {
            name: 'Valerio',
            email: 'address@email.com',
            'radio-list-1': '2',
            contactPrefCheck: ['app-notification','non-existing-answer'],
            privacyCheck: 'accepted',
            'share-my-infos': true
        };
        const expectedResult = fillForm( el, data );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data.name;
            const _2 = document.querySelector('[name="email"]').value === data.email;
            const _3 = document.querySelector('[name="radio-list-1"][value="2"]').checked;
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;
            const _6 = document.querySelector('[name="share-my-infos"]').checked;

            return _1 && _2 && _3 && _4 && _5 && _6;
        };
        expect( expectTest() ).toBe( true );
        expect( expectedResult ).toEqual( el );
    } );

    test( 'Test 2 with Data Object', () => {
        let el = document.querySelector( 'form' );
        const data = {
            name: 'Valerio',
            email: 'address@email.com',
            'radio-list-1': '3',
            'radio-list-1-more': 'hello',
            contactPrefCheck: ['app-notification','non-existing-answer'],
            privacyCheck: 'accepted',
            'share-my-infos': false
        };
        const expectedResult = fillForm( el, data );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data.name;
            const _2 = document.querySelector('[name="email"]').value === data.email;
            const _3a = document.querySelector('[name="radio-list-1"][value="3"]').checked;
            const _3b = document.querySelector('[name="radio-list-1-more"]').value === data['radio-list-1-more'];
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;
            const _6 = document.querySelector('[name="share-my-infos"]').checked === false;

            return _1 && _2 && _3a && _3b && _4 && _5 && _6;
        };
        expect( expectTest() ).toBe( true );
        expect( expectedResult ).toEqual( el );
    } );

    test( 'Test 3 with Data Object', () => {
        let el = document.querySelector( 'form' );
        el.querySelector('[name="email"]').value = 'valerio@email.com';
        const data = {
            name: 'Valerio',
            email: 'address@email.com',
            'radio-list-1': '3',
            'radio-list-1-more': 'hello',
            contactPrefCheck: ['app-notification','non-existing-answer'],
            privacyCheck: 'accepted'
        };
        const expectedResult = fillForm( el, data, true );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data.name;
            const _2 = document.querySelector('[name="email"]').value === 'valerio@email.com';
            const _3a = document.querySelector('[name="radio-list-1"][value="3"]').checked;
            const _3b = document.querySelector('[name="radio-list-1-more"]').value === data['radio-list-1-more'];
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;

            return _1 && _2 && _3a && _3b && _4 && _5;
        };
        expect( expectTest() ).toBe( true );
        expect( expectedResult ).toEqual( el );
    } );

    test( 'Test 4 with Data Object and formEl as selector', () => {
        let el = 'form';
        document.querySelector(el).querySelector('[name="email"]').value = 'valerio@email.com';
        const data = {
            name: 'Valerio',
            email: 'address@email.com',
            'radio-list-1': '3',
            'radio-list-1-more': 'hello',
            contactPrefCheck: ['app-notification','non-existing-answer'],
            privacyCheck: 'accepted'
        };
        const expectedResult = fillForm( el, data, true );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data.name;
            const _2 = document.querySelector('[name="email"]').value === 'valerio@email.com';
            const _3a = document.querySelector('[name="radio-list-1"][value="3"]').checked;
            const _3b = document.querySelector('[name="radio-list-1-more"]').value === data['radio-list-1-more'];
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;

            return _1 && _2 && _3a && _3b && _4 && _5;
        };
        expect( expectTest() ).toBe( true );
        expect( expectedResult ).toEqual( document.querySelector(el) );
    } );

    test( 'Test 4 with Data Object and formEl as NodeList', () => {
        let el = document.querySelectorAll('form');
        el[0].querySelector('[name="email"]').value = 'valerio@email.com';
        const data = {
            name: 'Valerio',
            email: 'address@email.com',
            'radio-list-1': '3',
            'radio-list-1-more': 'hello',
            contactPrefCheck: ['app-notification','non-existing-answer'],
            privacyCheck: 'accepted'
        };
        const expectedResult = fillForm( el, data, true );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data.name;
            const _2 = document.querySelector('[name="email"]').value === 'valerio@email.com';
            const _3a = document.querySelector('[name="radio-list-1"][value="3"]').checked;
            const _3b = document.querySelector('[name="radio-list-1-more"]').value === data['radio-list-1-more'];
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;

            return _1 && _2 && _3a && _3b && _4 && _5;
        };
        expect( expectTest() ).toBe( true );
        expect( expectedResult ).toEqual( el[0] );
    } );

    test( 'Test 5 with Form Element but undefined data', () => {
        let el = document.querySelector( 'form' );
        const data = undefined;
        const expectedResult = fillForm( el, data );
        const expectTest = () => {
            const _1 = document.querySelector('[name="name"]').value === data && data.name;
            const _2 = document.querySelector('[name="email"]').value === data && data.email;
            const _3 = document.querySelector('[name="radio-list-1"][value="2"]').checked;
            const _4 = document.querySelector('[name="contactPrefCheck"][value="app-notification"]').checked;
            const _5 = document.querySelector('[name="privacyCheck"][value="accepted"]').checked;

            return _1 && _2 && _3 && _4 && _5;
        };
        expect( expectTest() ).toBe( false );
        expect( expectedResult ).toEqual( el );
    } );

    test( 'Test with no arguments', () => {
        const expectedResult = fillForm();
        expect( true ).toBe( true );
        expect( expectedResult ).toEqual( null );
    } );

} );
