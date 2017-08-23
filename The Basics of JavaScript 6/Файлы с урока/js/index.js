'use strict';

function l(str) {
	console.log(str);
}

// var animals = {
// 	eats: true
// };
//
// var rabbit = {
// 	jumps: true,
// 	23: false,
// 	__proto__: animals
// };
//
// l(rabbit);
//
// for (var key in rabbit) {
// 	if (!rabbit.hasOwnProperty(key)) continue;
// 	// l(key + ':' + rabbit[key]);
// }

// l(rabbit.hasOwnProperty('23'));

// var animals = {
// 	eats: true
// };
//
// function Rabbit(name) {
// 	this.name = name;
// 	this.__proto__ = animals;
// }

// var animals = {
// 	eats: true
// };
//
// function Rabbit(name) {
// 	this.name = name;
// }
//
// Rabbit.prototype = animals;
//
// var rabbit = new Rabbit('Rab');
//
// Rabbit.prototype.constructor = animals.prototype.constructor;
//
//
// new Date();


function Form() {
	this._arrayOfButton = [];
}

Form.prototype.addButton = function(name, image, fn) {
	if (!arguments) return;

	var tempBtn = {
		name: name,
		image: image,
		fn: fn
	};

	this._arrayOfButton.push(tempBtn);
	l(this._arrayOfButton);
};

Form.prototype.deleteBtn = function(name) {
	if (!name) return;

	var findIndex;
	for (var i = 0; i < this._arrayOfButton.length; i++) {
		if (this._arrayOfButton[i].name === name) {
			findIndex = i;
		}
	}

	delete this._arrayOfButton[findIndex];

	l(this._arrayOfButton);
};

var form = new Form();

form.addButton(
	'Bold',
	'http://www.skinsheen.com/userfiles/image/Head%20Shave%20Trends(1).JPG',
	function() {
		l('SetTextToBold');

		setTimeout(function() {
			this.style.fontWeight = '800';
		}, 2000)
	}
);

form.deleteBtn('Bold');

form.changeBtn('Bold', 'image', 'http://img');













