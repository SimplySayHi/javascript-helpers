
import isDomNode        from "../isDomNode/isDomNode.js";
import isNodeList       from "../isNodeList/isNodeList.js";
import isValidSelector  from "../isValidSelector/isValidSelector.js";

export default (elements = []) => {

    if( isNodeList(elements) ){

        return Array.from( elements );

    } else if( isDomNode(elements) ){

        return [ elements ];

    } else if( isValidSelector(elements) ){

        return Array.from( document.querySelectorAll(elements) );

    } else {

        return [];

    }

};
