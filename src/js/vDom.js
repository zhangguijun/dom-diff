import Element from "./element";
/**
 * 
 */
function createElement(type, props, children) {
    return new Element(type, props, children)
}

function render(vDom) {
    const { type, props, children } = vDom
    const el = document.createElement(type);

    for (let key in props) {
        setAttrs(el, key, props[key])
    }
    children.map((c) => {
        // if(c instanceof Element) {
        //    c = render(c)
        // } else {
        //    c = document.createTextNode(c);
        // }
        c = c instanceof Element ? render(c): document.createTextNode(c);


        el.appendChild(c);
    })
    // console.log(el)

    return el;
}

function setAttrs(node, prop, value) {
    switch (prop) {
        case 'value':
            if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
                node.value = value
            } else {
                node.setAttribute(prop, value)
            }
            break;
        case "style":
            node.style.cssText = value
            break;
        default:
            node.setAttribute(prop, value)
    }
}

function renderDOM (el, rootEl) {
    rootEl.appendChild(el)
}

export {
    createElement,
    render,
    setAttrs,
    renderDOM
}