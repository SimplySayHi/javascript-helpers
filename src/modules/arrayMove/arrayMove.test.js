
import arrayMove from './arrayMove';

describe( 'Array Move', () => {

    test( 'Array Move: from 0 to 1', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 0, 1 );
        const expectedResult = ['b', 'a', 'c', 'd', 'e'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: from 2 to 4 (last)', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 2, 4 );
        const expectedResult = ['a', 'b', 'd', 'e', 'c'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: from 0 to 99 => put 1st element in last position', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 0, 99 );
        const expectedResult = ['b', 'c', 'd', 'e', 'a'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: from 1 (last) to -1 => put 2nd element in position "last -1"', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 1, -1 );
        const expectedResult = ['a', 'c', 'd', 'b', 'e'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: 1st argument is not an array => return empty array []', () => {
        const list = 'hello';
        const expectTest = arrayMove( list, 0, 1 );
        const expectedResult = [];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: omit 3rd argument ( 2nd arg positive and in range => 2 ) => move element to first position', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 2 );
        const expectedResult = ['c', 'a', 'b', 'd', 'e'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: omit 3rd argument ( 2nd arg negative and out of range => -1 ) => move last element to first position', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, -1 );
        const expectedResult = ['e', 'a', 'b', 'c', 'd'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

    test( 'Array Move: omit 3rd argument ( 2nd arg positive and out of range => 99 ) => add undefined value to first position', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const expectTest = arrayMove( list, 99 );
        const expectedResult = [undefined, 'a', 'b', 'c', 'd', 'e'];

        expect( expectTest ).toStrictEqual( expectedResult );
    } );

} );
