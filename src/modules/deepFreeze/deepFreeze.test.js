
import deepFreeze from './deepFreeze';

describe( 'Deep Freeze', () => {

    function areAllFrozen ( obj ) {
        let nestedAreFrozen = true;
        Object.getOwnPropertyNames(obj)
            .filter(prop => (typeof prop === 'object' && prop !== null))
            .forEach(name => {
                const prop = obj[name];
                if( Object.isFrozen(prop) ){
                    nestedAreFrozen = false;
                }
            });
        return nestedAreFrozen && Object.isFrozen(obj);
    }

    test( 'Deep Freeze Test with multi-level object', () => {
        const obj = {
            a: 1,
            b: true,
            c: ['aaa', 'bbb', 'ccc'],
            d: [{x: 'x', y: 'y', z: 'z'}],
            e: {
                aa: 'aa',
                bb: 'bb',
                cc: {
                    aaa: 'aaa'
                }
            }
        };
        deepFreeze( obj );
        const expectedResult = areAllFrozen( obj );
        expect( expectedResult ).toBe( true );
    } );

    test( 'Deep Freeze Test without argument', () => {
        const result = deepFreeze();
        expect( result ).toBe( undefined );
    } );

} );
