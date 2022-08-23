
import { DELAY, DURATION, EASING } from '../slideToggle/utils/utils.js';
import getElements from '../getElements/getElements.js';

const slideUpAnimation = ($elem, {delay, duration, easing}, callback) => {
    const display = window.getComputedStyle($elem).display;

    if( display === 'none' ){
        return
    }

    $elem.addEventListener('transitionend', () => {
        $elem.style.display = 'none';
        $elem.style.removeProperty('height');
        $elem.style.removeProperty('padding-top');
        $elem.style.removeProperty('padding-bottom');
        $elem.style.removeProperty('margin-top');
        $elem.style.removeProperty('margin-bottom');
        $elem.style.removeProperty('overflow');
        $elem.style.removeProperty('box-sizing');
        $elem.style.removeProperty('transition-property');
        $elem.style.removeProperty('transition-duration');
        $elem.style.removeProperty('transition-timing-function');
        $elem.style.removeProperty('transition-delay');
        callback && callback($elem);
    }, { once: true });

    $elem.style.transitionProperty = 'height, margin, padding';
    $elem.style.transitionDuration = `${duration}ms`;
    $elem.style.transitionTimingFunction = easing;
    $elem.style.transitionDelay = `${delay}ms`;
    $elem.style.boxSizing = 'border-box';
    $elem.style.height = `${$elem.offsetHeight}px`;
    $elem.offsetHeight;
    $elem.style.overflow = 'hidden';
    $elem.style.height = 0;
    $elem.style.paddingTop = 0;
    $elem.style.paddingBottom = 0;
    $elem.style.marginTop = 0;
    $elem.style.marginBottom = 0;
}

const slideUp = ( element, {delay = DELAY, duration = DURATION, easing = EASING} = {}, callback = ()=>{} ) => {
    const $elements = getElements(element);
    $elements.forEach($elem => slideUpAnimation($elem, {delay, duration, easing}, callback));
}

export default slideUp
