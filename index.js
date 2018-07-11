var domToReact = require('./lib/dom-to-react');
var htmlToDOM = require('html-dom-parser');

// decode HTML entities by default for `htmlparser2`
var domParserOptionsDefault = { decodeEntities: true, lowerCaseAttributeNames: false };

/**
 * Convert HTML string to React elements.
 *
 * @param  {String}   html              - The HTML string.
 * @param  {Object}   [options]         - The additional options.
 * @param  {Function} [options.replace] - The replace method.
 * @return {ReactElement|Array}
 */
function HTMLReactParser(html, options, domParserOptions = {}) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  return domToReact(htmlToDOM(html, { ...domParserOptionsDefault, domParserOptions }), options);
}

/**
 * Export HTML to React parser.
 */
module.exports = HTMLReactParser;
