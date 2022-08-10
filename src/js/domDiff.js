import {
    ATTR,
    TEXT,
    REMOVE,
    REPLACE
} from './patchType';

// 声明补丁包

let patches = {};
let vnIndex = 0;
function domDiff(oldVDom, newVDom) {
    let index = 0;

    vNodeWalk(oldVDom, newVDom, index);
    console.log(patches)
    return patches;
}

function vNodeWalk(oldNode, newNode, index) {
    let vNPatch = [];

    if (!newNode) {
        vNPatch.push({
            type: REMOVE,
            index
        })
    } else if (typeof oldNode === 'string' && typeof newNode === 'string') {
        if (oldNode !== newNode) {
            vNPatch.push({
                type: TEXT,
                text: newNode
            })
        }
    } else if (oldNode.type === newNode.type) {
        const attrPatch = attrWalk(oldNode.props, newNode.props);
        console.log(attrPatch)

        if(Object.keys(attrPatch).length > 0) {
            vNPatch.push({
                type: ATTR,
                attrs: attrPatch
            })
        }

        childWalk(oldNode.children, newNode.children);
    }

    if(vNPatch.length > 0) {
        patches[index] =  vNPatch;
    }

}

function attrWalk(oldAttrs, newAttrs) {
    let attrPatch = {};


    for (const key in oldAttrs) {
        // 修改属性
        if (oldAttrs[key] !== newAttrs[key]) {
            attrPatch[key] = newAttrs[key]
        }
    }
    for (const key in newAttrs) {
        // 修改属性
        if (oldAttrs.hasOwnProperty(key)) {
            attrPatch[key] = newAttrs[key]
        }
    }


    return attrPatch;


}


function childWalk(oldChildren, newChildren) {
    oldChildren.map((c, idx) => {
        vNodeWalk(c, newChildren[idx], ++ vnIndex);
    })
}

export default domDiff;