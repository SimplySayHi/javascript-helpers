
import { DELAY, DURATION, EASING, DISPLAY_VALUE } from '../slideToggle/utils/utils.js';
import getElements from '../getElements/getElements.js';

const slideDownAnimation = ($elem, {delay, duration, easing, displayValue}, callback) => {
    let display = window.getComputedStyle($elem).display;
    
    if( display === 'none' ){
        display = displayValue;
    } else {
      return
    }
    
    $elem.style.display = display;
    
    const height = $elem.offsetHeight;

    $elem.addEventListener('transitionend', () => {
        $elem.style.removeProperty('height');
        $elem.style.removeProperty('overflow');
        $elem.style.removeProperty('box-sizing');
        $elem.style.removeProperty('transition-duration');
        $elem.style.removeProperty('transition-property');
        callback($elem);
    }, { once: true });
    
    $elem.style.overflow = 'hidden';
    $elem.style.height = 0;
    $elem.style.paddingTop = 0;
    $elem.style.paddingBottom = 0;
    $elem.style.marginTop = 0;
    $elem.style.marginBottom = 0;
    $elem.offsetHeight;
    $elem.style.boxSizing = 'border-box';
    $elem.style.transitionProperty = 'height, margin, padding';
    $elem.style.transitionDuration = `${duration}ms`;
    $elem.style.transitionTimingFunction = easing;
    $elem.style.transitionDelay = `${delay}ms`;
    $elem.style.height = `${height}px`;
    $elem.style.removeProperty('padding-top');
    $elem.style.removeProperty('padding-bottom');
    $elem.style.removeProperty('margin-top');
    $elem.style.removeProperty('margin-bottom');
}

const slideDown = ( element, {delay = DELAY, duration = DURATION, easing = EASING, displayValue = DISPLAY_VALUE} = {}, callback = ()=>{} ) => {
    const $elements = getElements(element);
    $elements.forEach($elem => slideDownAnimation($elem, {delay, duration, easing, displayValue}, callback));
}

export default slideDown
