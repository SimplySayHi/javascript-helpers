
import runFunctionsSequence from './runFunctionsSequence';

describe('Run Functions Sequence', () => {

    const obj = {
            result: true    
        },
        fnList_0 = [],
        fnList_1 = [
            function fnTest_1 ( data ){
                return data;
            },
            function fnTest_2 ( data ){
                data.prova = 'ciao';
                return data;
            },
            function fnTest_3 ( data ){
                return Promise.all( [1, 2, 3].map(function( num ){
                    return new Promise(resolve => {
                        setTimeout(function(){
                            num = num + 1;
                            resolve({num: num});
                        }, 3000);
                    });
                }) ).then(list => {
                    return data;
                });
            }
        ],
        fnList_2 = [
            function fnTest_1 ( data ){
                return data;
            },
            function fnTest_2 ( data ){
                data.prova = 'ciao';
                data.stopExecution = true;
                return data;
            },
            function fnTest_3 ( data ){
                return Promise.all( [1, 2, 3].map(function( num ){
                    return new Promise(resolve => {
                        setTimeout(function(){
                            num = num + 1;
                            resolve({num: num});
                        }, 3000);
                    });
                }) ).then(list => {
                    return data;
                });
            }
        ],
        fnList_3 = [
            function fnTest_1 ( data ){
                return data;
            }
        ],
        fnList_4 = [
            function fnTest_1 ( data ){}
        ];

    test('Fn List empty', () => {
        const expectTest = runFunctionsSequence({functionsList: fnList_0, data: obj});
        const expectedResult = [
            {result: true}
        ];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

    test('Fn List with multiple fn without Stop Condition', () => {
        const expectTest = runFunctionsSequence({functionsList: fnList_1, data: obj});
        const expectedResult = [
            {result: true},
            {result: true, prova: 'ciao'},
            {result: true, prova: 'ciao'}
        ];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

    test('Fn List with multiple fn with Stop Condition', () => {
        const expectTest = runFunctionsSequence({functionsList: fnList_2, data: obj, stopConditionFn: function(data){ return data.stopExecution; }});
        const expectedResult = [
            {result: true},
            {result: true, prova: 'ciao', stopExecution: true}
        ];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

    test('Fn List with 1 fn without Stop Condition', () => {
        const expectTest = runFunctionsSequence({functionsList: fnList_3, data: obj});
        const expectedResult = [
            {result: true}
        ];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

    test('Fn List with 1 fn ( that does\'t have a return statement ) without Stop Condition', () => {
        const expectTest = runFunctionsSequence({functionsList: fnList_4, data: obj});
        const expectedResult = [
            {result: true}
        ];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

    test('with no Arguments', () => {
        const expectTest = runFunctionsSequence();
        const expectedResult = [{}];
        return expect( expectTest ).resolves.toStrictEqual( expectedResult );
    });

});
