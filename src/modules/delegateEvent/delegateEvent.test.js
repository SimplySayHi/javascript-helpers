
import delegateEvent from './delegateEvent';

/*
    ALL PARAMETERS ( EXCEPT data AND useCapture ) ARE MANDATORY.
    CASES OF MISSING PARAMETERS ARE NOT MANAGED EXCEPT FOR $ancestor SINCE IT USES getElements
*/

describe( 'Delegate Event', () => {

    const newHTML = `
        <li>
            <a href="#" data-num="2" data-js-action="doSomething">
                <span>&lt;</span>
                <span>button text 2</span>
            </a>
        </li>
    `;

    beforeEach(() => {
        document.body.innerHTML = `
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#" data-num="1" data-js-action="doSomething">
                                <span>&lt;</span>
                                <span>button text 1</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    } );

    test( 'Delegate Event: All set', () => {
        const $ancestor = document.querySelector('header');
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            'click',
            { $ancestor, target, data },
            callback
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: $ancestor missing => callback NOT called', () => {
        const $ancestor = null;
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            'click',
            { $ancestor, target, data },
            callback
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).not.toHaveBeenCalled();
    } );

} );
