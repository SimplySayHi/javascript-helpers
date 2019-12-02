
import runCallback from './runCallback';

describe( 'Execute Callback', () => {

    test( 'Executes a Single Callback', () => {
        const cb1 = jest.fn();

        runCallback( { fn: cb1 } );

        expect( cb1 ).toHaveBeenCalled();
    } );

    test( 'Executes a Series of Callbacks', () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const cb3 = jest.fn();
        
        runCallback( { fn: [ cb1, cb2, cb3 ] } );

        expect( cb1 ).toHaveBeenCalled();
        expect( cb2 ).toHaveBeenCalled();
        expect( cb3 ).toHaveBeenCalled();
    } );

    test( 'No functions passed', () => {
        const cb1 = jest.fn();
        runCallback();
        expect( cb1 ).not.toHaveBeenCalled();
    } );

} );
