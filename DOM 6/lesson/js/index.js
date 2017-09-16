'use strict';

var first = document.querySelector('.first');

// first.style.backgroundColor = 'red';
// first.style.backgroundColor = "";
// first.style.display = 'none';
// first.style.display = '';

// first.style.cssText = '\t\t\t\twidth:' + 100 + 'px;\n' +
// 	'\t\t\t\theight: 100px;\n' +
// 	'\t\t\t\tbackground-color: gray;\n' +
// 	'\t\t\t\tfloat: right;';

// console.log(first.style);

var computed = getComputedStyle(first).perspectiveOrigin;
console.log(computed);
var current = first.currentStyle;

var a = {
	top: 10,
	right: 10,
	text: 'Hello World!',
	className: 'custom-alert'
};

/**
 *
 * @param options
 */
function showNotification(options) {
	var el = document.createElement('div');
	el.cssText =    'top:' + options.top + 'px;' +
					'right:' + options.right + ';';
	el.innerText = options.text;
	el.className = options.className;
	document.body.appendChild(el);

	setTimeout(function() {
		document.body.removeChild(el);
	}, 1500);
}

showNotification(a);

// Смещение относительно родителя
// offsetParent, offsetLeft / offsetLeft

document.cloneNode()



