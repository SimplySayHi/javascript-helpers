
import getElements from '../getElements/getElements.js';

const getElementOffset = element => {
    const $elem = getElements(element)[0];
    const offset = { top: 0, left: 0 }
    
    // Return zeros for disconnected and hidden (display: none) elements
    if( !$elem || !$elem.getClientRects().length ){
        return offset
    }

    const rect = $elem.getBoundingClientRect();
    const win = $elem.ownerDocument.defaultView;

    offset.top = rect.top + win.pageYOffset
    offset.left = rect.left + win.pageXOffset

    return offset
}

export default getElementOffset
