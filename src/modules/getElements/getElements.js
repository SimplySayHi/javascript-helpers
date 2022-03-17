
import isDomNode        from "../isDomNode/isDomNode.js";
import isNodeList       from "../isNodeList/isNodeList.js";
import isValidSelector  from "../isValidSelector/isValidSelector.js";

const getElements = (elements, parent) => {

    if( isValidSelector(elements) ){

        if( isValidSelector(parent) ){
            const mergedSelector = `${parent} ${elements}`;
            return Array.from( document.querySelectorAll(mergedSelector) )
        }

        let $parents = getElements(parent);
        $parents = $parents.length > 0 ? $parents : [document];

        const $list = $parents.reduce(($accList, $parent) => {
            $accList.push(...Array.from($parent.querySelectorAll(elements)))
            return $accList
        }, []);

        return [...new Set($list)]

    } else if( Array.isArray(elements) || isNodeList(elements) ){

        return Array.from( elements );

    } else if( elements === document || isDomNode(elements) ){

        return [ elements ];

    } else {

        return [];

    }

}

export default getElements
