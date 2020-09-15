
import mergeObjects from './mergeObjects';

describe( 'Merge Objects', () => {

    test( 'Merge Objects Test 0 (no args)', () => {
        const expectTest = mergeObjects();
        const extectedResult = {};
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Shallow Merge Objects Test 1', () => {
        const obj_1 = {a: 1},
              obj_2 = {b: [1,2,3]},
              obj_3 = {c: true};

        const expectTest = mergeObjects({}, obj_1, null, obj_2, undefined, obj_3);
        const extectedResult = {
                a: 1,
                b: [1,2,3],
                c: true
            };
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Shallow Merge Objects Test 2', () => {
        const obj_1 = {a: 1},
              obj_2 = {b: [1,2,3]},
              obj_3 = {c: true},
              obj_4 = {b: [0]};

        const expectTest = mergeObjects({}, obj_1, obj_2, obj_3, obj_4);
        const extectedResult = {
                a: 1,
                b: [0],
                c: true
            };
        expect( expectTest ).toEqual( extectedResult );
    } );

    test( 'Deep Merge Objects', () => {
        const obj_1 = {a: 1},
              obj_2 = {
                b: {
                    w: 'ciao',
                    x: { y: 'come va', z: false }
                }
              },
              obj_3 = {c: true},
              obj_4 = {b: {w: 'pappappero'}};

        const expectTest = mergeObjects({}, obj_1, obj_2, obj_3, obj_4);
        const extectedResult = {
                a: 1,
                b: {
                    w: 'pappappero',
                    x: { y: 'come va', z: false }
                },
                c: true
            };
        expect( expectTest ).toEqual( extectedResult );
    } );

});
