console.log('111')


import { createElement, render, renderDOM } from './vDom'
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
            'data-index': 0,
        }, [
            createElement('p', { class: 'text' }, [createElement('span', { class: 'title' }, ['第二个列表项'])])
        ]),
        createElement('li', {
            class: 'item',
            'data-index': 0,
        }, ['第三个列表项']),
    ]
)

const rDom = render(vDom);

console.log(rDom, '真实dom')


renderDOM(rDom, document.getElementById('app'))

console.log(vDom)