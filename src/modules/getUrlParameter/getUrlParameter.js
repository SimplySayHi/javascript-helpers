
export default ( parameterName = '' ) => {

    parameterName = parameterName.trim();

    const urlVariables = window.location.search.substring(1).split('&'),
          paramsLength = urlVariables.length;

    if( parameterName ){
        // RETURN THE REQUESTED PARAMETER VALUE
        for( let i = 0; i < paramsLength; i++ ){
            const param = urlVariables[i].split('=');
            if (parameterName && param[0] === parameterName) {
                return param[1] === undefined ? true : decodeURIComponent(param[1]);
            }
        }
    } else {
        // RETURN ALL PARAM VALUES
        return urlVariables.filter(val => !!val).reduce((acc, value) => {
            const param = value.split('=');
            const paramObj = {
                name: param[0],
                value: param[1] === undefined ? true : decodeURIComponent(param[1])
            };
            acc.push( paramObj );
            return acc;
        }, []);
    }

}
