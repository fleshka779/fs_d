'use strict';

/** Get by id */
var content = document.getElementById('content');

console.log(window['content']);

console.log(content);

/** Get by tag name */
var span = document.getElementsByTagName('span');

console.log(span[0]);
console.log(span);

/** Get by name*/

var ageEl = document.getElementsByName('age');

console.log(ageEl[0]);

/** Get by class */
var postElements = document.getElementsByClassName('post');

console.log(postElements);

/** Work with css selectors */

var defaultInputs = document.querySelectorAll('.default');

console.log(defaultInputs);

var contentQuery = document.querySelectorAll('#content');

console.log(contentQuery);
console.log(document.querySelectorAll('span'));
console.log(document.querySelectorAll('.post .comments'));
console.log(document.querySelector('.post .comments:nth-child(2)'));

/**
 * .image У второй картинки bg красным
 * .title font size 20px, цвет зеленый
 * .description bg gray
 *  У второго коммента сдеать bg yellow
 * */
function getData(type) {
	var name = document.querySelector('.default-name');
	var age = document.querySelector('.default-age');

	console.log('Name: ' + name.value);
	console.log('Age: ' + age.value);

	if (type && type === 'name') {
		if (!name.value) return;
		var infoName = document.querySelector('.user-info-name');
		if (infoName) {
			infoName.innerText = 'Name: ' + name.value
		}
	} else if (type && type === 'age') {
		if (!age.value) return;
		var infoAge = document.querySelector('.user-info-age');
		if (infoAge) {
			infoAge.innerText = 'Age: ' + age.value;
		}


	}
}
var ret = 2 + 5;
var commentPattern = '<div class="post">\n' +
		'\t\t\t<div class="comments">' + ret + '</div>\n' +
	'\t\t\t<div class="comments">2</div>\n' +
	'\t\t\t<div class="comments">3</div>\n' +
	'\t\t</div>'


