
import getDateSeparator from '../getDateSeparator/getDateSeparator.js';
import isValidDate from '../isValidDate/isValidDate.js';

export default ( dateString1 = '', dateString2 = '' ) => {
    try {

        dateString1 = dateString1.trim();
        dateString2 = dateString2.trim();

        if( !isValidDate(dateString1) || !isValidDate(dateString2) ){
            throw new Error('Date string(s) not valid. Date(s) format must be ISO 8601');
        }

        let dateSeparator1 = getDateSeparator(dateString1),
            dateSeparator2 = getDateSeparator(dateString2),
            date1 = new Date( dateString1.split( dateSeparator1 ).join('-') ),
            date2 = new Date( dateString2.split( dateSeparator2 ).join('-') ),
            age = date1.getFullYear() - date2.getFullYear(),
            monthsDiff = date1.getMonth() - date2.getMonth();

        if (monthsDiff < 0 || (monthsDiff === 0 && date1.getDate() < date2.getDate())) {
            age--;
        }

        return age;

    } catch ( error ) {
        return -1;
    }
}
