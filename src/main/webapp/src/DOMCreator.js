const ReactDOM = require('react-dom');
const React = require('react');
const SimpleList = require('./jsxcomponents/SimpleList.js');

class DOMCreator {
    createSimpleList(elements, parent) {
        ReactDOM.render(<SimpleList elements={elements} />, document.getElementById(parent));
    }

}

module.exports = DOMCreator;