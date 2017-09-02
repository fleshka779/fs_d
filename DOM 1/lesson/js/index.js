'use strict';

// document
// window
// screen

var arrayOfColors = ['#003399','#004299', '#004265', '#251533'];

function changeColorOfBody() {
	document.body.style.backgroundColor = '#' + (Math.random() * 1000000).toFixed();
}

function changFontSize() {
	var currentElement = document.getElementById('simple-text');
	if (!currentElement.style.fontSize) currentElement.style.fontSize = 0;
	currentElement.style.fontSize = (parseInt(currentElement.style.fontSize) + 1).toString() + 'px';
	console.log(currentElement.style.fontSize);
}

// 'simple-text'

function startChangeColor() {
	setInterval(function() {
		changeColorOfBody();
		changFontSize();
	}, 1000)
}

function doThis() {
	var list = document.querySelector('.list');

	for (var i = 0; i < list.children.length; i++) {
		list.children[i].appendChild(createNewEl());
	}

	function createNewEl() {
		var createdElement = document.createElement('div');
		createdElement.style.backgroundColor = 'blue';
		createdElement.style.height = '50px';
		createdElement.style.width = '100%';
		return createdElement;
	}
}