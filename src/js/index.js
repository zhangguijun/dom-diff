console.log('111')


import { createElement, render, renderDOM } from './vDom'

import domDiff from './domDiff';
const vDom = createElement('ul', {
    class: 'list',
    style: 'width: 300px;background-color: blue;'
}, [
        createElement('li', {
            class: 'item',
            'data-index': 0,
        }, [
            createElement('p', { class: 'text' }, ['第一个列表项'])
        ]),
        createElement('li', {
            class: 'item',
            'data-index': 1,
        }, [
            createElement('p', { class: 'text' }, [createElement('span', { class: 'title' }, ['第二个列表项'])])
        ]),
        createElement('li', {
            class: 'item',
            'data-index': 2,
        }, ['第三个列表项']),
    ]
)
const vDom2 = createElement('ul', {
    class: 'list-warp',
    style: 'width: 300px;height:300px;background-color: green;'
}, [
        createElement('li', {
            class: 'item',
            'data-index': 0,
        }, [
            createElement('p', { class: 'title' }, ['特殊'])
        ]),
        createElement('li', {
            class: 'item',
            'data-index': 1,
        }, [
            createElement('p', { class: 'text' }, [])
        ]),
        createElement('div', {
            class: 'item',
            'data-index': 2,
        }, ['第三个列表项']),
    ]
)

const rDom = render(vDom);

// console.log(rDom, '真实dom')

const patches = domDiff(vDom, vDom2);
console.log('补丁包', patches)

renderDOM(rDom, document.getElementById('app'))

// console.log(vDom)