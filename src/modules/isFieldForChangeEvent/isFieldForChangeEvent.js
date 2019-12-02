
import isDomNode from "../isDomNode/isDomNode.js";

export default ( fieldEl = null ) => {
    if( !fieldEl || !isDomNode(fieldEl) ){ return false; }
    return fieldEl.matches('select, [type="radio"], [type="checkbox"], [type="file"]');
}
