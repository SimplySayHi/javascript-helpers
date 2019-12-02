
import getFilledFields from './getFilledFields';

describe( 'Get Filled Fields', () => {

    beforeEach(() => {
        document.body.innerHTML = `<form name="my-form">
                                        <div data-formjs-question>
                                            <input name="name" type="text" data-length="[3,20]" value="Valerio" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="email" type="email" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="radio-list-1" type="radio" value="1" />
                                            <input name="radio-list-1" type="radio" value="2" />
                                            <input name="radio-list-1" type="radio" value="3" data-require-more="" id="req-more-1" checked />
                                            <input name="radio-list-1-more" type="text" data-required-from="#req-more-1" value="Hi" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="contactPrefCheck" type="checkbox" value="sms" data-checks="[1,2]" checked />
                                            <input name="contactPrefCheck" type="checkbox" value="email" checked />
                                            <input name="contactPrefCheck" type="checkbox" value="app-notiifcation" />
                                        </div>
                                        <div data-formjs-question>
                                            <input name="share-my-infos" type="checkbox" />
                                        </div>
                                        <div data-formjs-question>
                                            <input type="radio" name="privacyCheck" value="accepted" checked />
                                            <input type="radio" name="privacyCheck" value="" />
                                        </div>
                                    </form>`;
    } );

    test( 'Form is an Existing HTML Element', () => {
        let el = document.querySelector( 'form' );
        const expectTest = getFilledFields( el );
        const expectedResult = [
            document.querySelector('[name="name"]'),
            document.querySelector('[name="radio-list-1"][value="3"]'),
            document.querySelector('[name="radio-list-1-more"]'),
            document.querySelector('[name="contactPrefCheck"][value="sms"]'),
            document.querySelector('[name="privacyCheck"][value="accepted"]')
        ];
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form passed as NodeList', () => {
        let el = document.querySelectorAll( 'form' );
        const expectTest = getFilledFields( el );
        const expectedResult = [
            document.querySelector('[name="name"]'),
            document.querySelector('[name="radio-list-1"][value="3"]'),
            document.querySelector('[name="radio-list-1-more"]'),
            document.querySelector('[name="contactPrefCheck"][value="sms"]'),
            document.querySelector('[name="privacyCheck"][value="accepted"]')
        ];
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form passed as selector', () => {
        let el = 'form';
        const expectTest = getFilledFields( el );
        const expectedResult = [
            document.querySelector('[name="name"]'),
            document.querySelector('[name="radio-list-1"][value="3"]'),
            document.querySelector('[name="radio-list-1-more"]'),
            document.querySelector('[name="contactPrefCheck"][value="sms"]'),
            document.querySelector('[name="privacyCheck"][value="accepted"]')
        ];
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form is a non-existing HTML Element', () => {
        let el = document.querySelector( 'form[name="non-existing-form"]' );
        const expectTest = getFilledFields( el );
        const expectedResult = [];
        expect( expectTest ).toEqual( expectedResult );
    } );

    test( 'Form is not passed', () => {
        const expectTest = getFilledFields();
        const expectedResult = [];
        expect( expectTest ).toEqual( expectedResult );
    } );

} );
