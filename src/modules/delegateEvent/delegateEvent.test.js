
import delegateEvent from './delegateEvent';

/*
    ALL PARAMETERS ( EXCEPT data ) ARE MANDATORY.
    CASES OF MISSING PARAMETERS ARE NOT MANAGED EXCEPT FOR ancestor SINCE IT USES getElements
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

    test( 'Delegate Event: All set => ancestor as document', () => {
        const ancestor = document;
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as document.body', () => {
        const ancestor = document.body;
        const target = '[data-js-action="doSomething"]';
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as DOM node', () => {
        const ancestor = document.querySelector('header');
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as DOM node but trigger click outside', () => {
        const ancestor = document.querySelector('header');
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('li').click();
        expect( callback ).not.toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as NodeList', () => {
        const ancestor = document.querySelectorAll('header');
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as CSS selector', () => {
        const ancestor = 'header';
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalled();
    } );

    test( 'Delegate Event: All set => ancestor as DOM node and target as multiple selector', () => {
        const ancestor = document.querySelector('header');
        const target = '[data-num="1"], [data-num="2"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="1"]').click();
        document.querySelector('[data-num="2"]').click();
        expect( callback ).toHaveBeenCalledTimes( 2 );
    } );

    test( 'Delegate Event: ancestor missing => callback NOT called', () => {
        const ancestor = null;
        const target = '[data-js-action="doSomething"]';
        const data = { greeting: 'Hi' };
        const callback = jest.fn();
        
        delegateEvent(
            ancestor, 
            'click',
            target,
            callback,
            { data }
        );

        document.querySelector('ul').insertAdjacentHTML( 'beforeend', newHTML );
        document.querySelector('[data-num="2"]').click();
        expect( callback ).not.toHaveBeenCalled();
    } );

} );
