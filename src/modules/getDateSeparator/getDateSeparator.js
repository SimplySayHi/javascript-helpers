
// AS PER ISO 8601 DATE FORMAT, THE DATE SEPARATOR CAN BE: "-", "/", " " ( SPACE )

export default ( dateString = '', checkIso8601separator = true ) => {

    try {

        dateString = dateString.trim();

        const RegExSeparator = checkIso8601separator ? /[ \/\-]/ : /\D/;
        const separator = dateString.match( RegExSeparator );

        return (separator && separator.length > 0) ? separator[0] : separator;

    } catch ( error ) {

        return null;

    }

}
