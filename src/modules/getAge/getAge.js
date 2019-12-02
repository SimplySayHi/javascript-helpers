
import getDateSeparator from '../getDateSeparator/getDateSeparator.js';
import isValidDate from '../isValidDate/isValidDate.js';

export default ( dateString = '' ) => {
    try {

        dateString = dateString.trim();

        if( !isValidDate(dateString) ){
            throw new Error('Date string not valid. Date format must be ISO 8601');
        }
        
        let today = new Date(),
            dateSeparator = getDateSeparator(dateString),
            birthDate = new Date( dateString.split( dateSeparator ).join('-') ),
            monthsDiff = today.getMonth() - birthDate.getMonth(),
            age = today.getFullYear() - birthDate.getFullYear();

        if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;

    } catch ( error ) {
        return -1;
    }
}
