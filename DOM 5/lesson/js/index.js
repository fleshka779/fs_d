'use strict';

// if (document.documentElement.firstElementChild === undefined) {
//
// 	Object.defineProperty(Element.prototype, 'firstElementChild', {
// 		get: function() {
// 			var el = this.firstChild;
// 			do {
// 				if (el.nodeType === 1) {
// 					return el;
// 				}
// 				el = el.nextSibling;
// 			} while (el);
//
// 			return null;
// 		}
// 	});
// }
//
// var el = document.querySelector('body');

//
// var ul = document.querySelector('ul');

// ul.innerHTML = "<li>1</li><li>3</li>";
// ul.innerHTML = ul.innerHTML + '<li>4</li>';

// var li = ul.children[2];
// var li1 = ul.children[1];

// var li = document.querySelector('ul').children[0].children[0].children[1];
// var li = document.querySelector('ul > li > ul > li:last-child');
//
// li.insertAdjacentHTML('afterBegin', '<span>Hello World !</span>'); //  <li>Сюда Text</li>
// li.insertAdjacentHTML('afterEnd', '<span>Hello World !</span>'); //  <li></li> Сюда
//

// li.insertAdjacentHTML('beforeBegin', '<li>3</li><li>4</li>'); // Сюда <li></li>
// li1.insertAdjacentHTML('beforeEnd', '<li>3</li><li>4</li>'); //  <li>Text Сюда</li>
// li1.insertAdjacentHTML('afterBegin', '<li>3</li><li>4</li>'); //  <li>Сюда Text</li>
// li1.insertAdjacentHTML('afterEnd', '<li>3</li><li>4</li>'); //  <li></li> Сюда

// var list = document.querySelector('.list');
// var fragment = document.createDocumentFragment();
// //
// for (var i = 0; i < 5; i++) {
// 	var li = document.createElement('li');
// 	fragment.appendChild(li);
// }
//
// console.dir(fragment);
//
// list.appendChild(fragment)


// list.append(fragment);
// list.prepend(fragment);
// list.after(fragment);
// list.before(fragment);
// list.replaceWith(fragment);

// document.write('Hello World!');

class Basket {
	constructor() {
		this._itemsArray = [];
		this._totalPrice = 0;
	}

	/**
	 * Add new Item
	 * @param item
	 */
	addNewItem(item) {
		if (!item || !item.name) throw new TypeError('Invalid param');

		item['domElement'] = this._createNewDomElement(item);

		this._itemsArray.push(item);
		this._totalPrice = item.price;

		console.log(this._itemsArray);
	}

	/**
	 * Generate new Total Price
	 * @set
	 * @param itemPrice
	 * @private
	 */
	set _totalPrice(itemPrice) {
		if (itemPrice === undefined || itemPrice === null) {
			throw new TypeError('Invalid param itemPrice');
		}

		var totalCostEl = document.querySelector('.total-cost');

		if (!totalCostEl) throw new Error('Element with class total-cost is not found!');

		totalCostEl.innerText = parseInt(totalCostEl.innerText) + parseInt(itemPrice);
	}

	_createNewDomElement(item) {
		if (!item || !item.name) throw new TypeError('Invalid param');

		if (document) {
			var createElement = document.createElement('div');

			createElement.innerHTML = '\t\t' +
				'<img src="' + item.image + '">\n' +
				'\t\t<div class="title">' + item.name + '</div>\n' +
				'\t\t<input type="number" class="count" value="' + item.count + '">\n' +
				'\t\t<span class="price">' + item.price + '</span>';

			createElement.className = 'item';

			document.querySelector('.basket-elements').appendChild(createElement);

			return createElement;
		}
	}
}

var basket = new Basket();

for (var i = 0; i < 5; i++) {
	basket.addNewItem({
		name: 'First',
		image: 'https://monosnap.com/file/pC91jOb15fY9EUaqeHMmrRa2pu7dLC',
		count: i,
		price: 500
	});
}

