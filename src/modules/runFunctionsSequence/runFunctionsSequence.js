
import mergeObjects from '../mergeObjects/mergeObjects.js';

export default ( { functionsList = [], data = {}, stopConditionFn = function(){return false} } = {} ) => {

    return functionsList.reduce(function(acc, promiseFn){
        return acc.then(function (res) {
            let dataNew = mergeObjects({}, res[res.length - 1]);
            if( stopConditionFn(dataNew) ){
                return Promise.resolve(res);
            }
            return new Promise(resolve => { resolve(promiseFn(dataNew)) })
                .then(function (result = dataNew) {
                    res.push(result);
                    return res;
                });
        });
    }, Promise.resolve([data]))
        .then(dataList => dataList.length > 1 ? dataList.slice(1) : []);
}
