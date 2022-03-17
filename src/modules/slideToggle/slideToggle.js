
import { DELAY, DURATION, EASING, DISPLAY_VALUE } from './utils/utils.js';
import getElements from '../getElements/getElements.js';
import slideDown from '../slideDown/slideDown.js';
import slideUp from '../slideUp/slideUp.js';

const slideToggle = ( element, {delay = DELAY, duration = DURATION, easing = EASING, displayValue = DISPLAY_VALUE} = {}, callback ) => {
    const $elements = getElements(element);

    $elements.forEach($elem => {
        if( window.getComputedStyle($elem).display === 'none' ){
            slideDown($elem, {delay, duration, easing, displayValue}, callback);
        } else {
            slideUp($elem, {delay, duration, easing}, callback);
        }
    });
}

export default slideToggle
