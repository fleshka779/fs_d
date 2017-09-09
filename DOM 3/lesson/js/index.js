'use strict';


// class Basket {
// 	constructor() {
// 		this._itemsArray = [];
// 	}
//
// 	addNewItem(item) {
// 		if (!item || !item.name) throw new TypeError('Invalid param');
//
// 		var createElement = this._createNewDomElement(item);
//
// 		item['domElement'] = createElement;
//
// 		this._itemsArray.push(item);
//
// 		console.log(this._itemsArray);
// 	}
//
// 	_createNewDomElement(item) {
// 		if (!item || !item.name) throw new TypeError('Invalid param');
//
// 		if (document) {
// 			var createElement = document.createElement('div');
//
// 			createElement.innerHTML = '\t\t' +
// 				'<img src="' + item.image + '">\n' +
// 				'\t\t<div class="title">' + item.name + '</div>\n' +
// 				'\t\t<input type="number" class="count" value="' + item.count + '">\n' +
// 				'\t\t<span class="price">' + item.price + '</span>';
//
// 			createElement.className = 'item';
//
// 			document.body.appendChild(createElement);
//
// 			return createElement;
// 		}
// 	}
// }
//
// var basket = new Basket();
//
//
//
// for (var i = 0; i < 10; i++) {
// 	basket.addNewItem({
// 		name: 'First',
// 		image: 'https://monosnap.com/file/pC91jOb15fY9EUaqeHMmrRa2pu7dLC',
// 		count: i,
// 		price: 500
// 	});
// }

function l(msg) {
	console.log(msg);
}

document.body.myData = {
	name: 'Vlad',
	age: 20
};

document.body.helloWorld = function() {
	console.log('Hello World!');
};

var element = document.createElement('img');
// Проверка наличия
l(element.hasAttribute('src'));

element.setAttribute('src', 'http://www.theboardgamefamily.com/wp-content/uploads/2010/08/Sequence-board1.jpg');
element.setAttribute('custom', {});

l(element.hasAttribute('src'));
l(element.getAttribute('src'));

// element.removeAttribute('custom');

document.body.appendChild(element);

l(element.attributes);

l(element.innerHTML);

// a.href = '/';
//
// l(a.getAttribute('href'));
// l(a.href);

var input = document.querySelector('input');

input.value = 'new';

input.setAttribute('value', 'new');

l(input.getAttribute('value'));


if (!input.getAttribute('value')) {
	setInvalidClass(input);
}

function setInvalidClass(el) {
	el.className = 'red first second third';
}

setInvalidClass(input);

l(input.classList);

l(input.classList.contains('red'));

input.classList.add('blue');
input.classList.remove('red');

function setElementActive(el) {
	el.classList.add('active');
}
function setElementInActive(el) {
	el.classList.remove('active');
}


function toggleClass(el, toggleClass) {
	if (el.classList.contains(toggleClass)) {
		el.classList.remove(toggleClass);
	} else {
		el.classList.add(toggleClass);
	}
}

input.classList.toggle('red-rect');

l(input.getAttribute('data-age'));

input.dataset






