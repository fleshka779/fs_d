'use strict';

// Function.prototype.defer = function(time) {
// 	var f = this;
// 	return function(a, b) {
// 		var arg = arguments;
// 		setTimeout(function() {
// 			f.apply(f, arg);
// 		}, time)
// 	};
// };
//
// function a(a, b) {
// 	alert('Privet ' + a + ' ' + b);
// }
//
// a.defer(2000)('Vova', 'Petya');
function l(msg) {
	console.log(msg);
}
//
// var obj = {};
//
// l(obj);

// var a = 'qwer';
// l(a);

// Object.prototype.each = function(f) {
// 	for (var key in this) {
// 		if (!this.hasOwnProperty(key)) continue;
//
// 		var value = this[key];
//
// 		f.call(value, key, value);
// 	}
// };
//
// var b = {
// 	name: 'Vlad',
// 	age: 20,
// 	__proto__: { sex: 'male'}
// };
//
// b.each(function(key, value) {
// 	alert(key + ':' + value)
// });

// function Animal(name) {
// 	this.speed = 0;
// 	this.name = name;
// }
//
// Animal.prototype.run = function(speed) {
// 	this.speed += speed;
// 	l(this.name + ' run with speed ' + this.speed);
// };
//
// Animal.prototype.stop = function() {
// 	this.speed = 0;
// 	l(this.name + ' is stop');
// };
//
//
// var animal = new Animal('Wolf');
//
// animal.run(3);
// animal.run(10);
// animal.stop();
//
// function Rabbit(name) {
// 	this.name = name;
// 	this.speed = 0;
// }
//
// // Наследование
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;
// // ----------------
//
// Rabbit.prototype.jump = function() {
// 	this.speed++;
// 	l(this.name + ' Jump');
// };
//
// var rabbit = new Rabbit('Rabbit Vasya');
// l(rabbit);
//
// rabbit.run(1);
//
// rabbit.jump();
//
// Rabbit.prototype.run = function() {
// 	this.speed++;
// 	this.jump();
// };
//
// l(rabbit);
//
// function User(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }
//
// User.prototype.showFullName = function() {
// 	l('Hello ' + this.firstName + ' ' + this.lastName);
// };
//
// function Gopnik(firstName) {
// 	this.firstName = firstName;
// 	this.spinerIsRun = false;
// }
// Gopnik.prototype = Object.create(User.prototype);
//
// Gopnik.prototype.spinSpinner = function() {
// 	this.spinerIsRun = true;
// 	l('Spinner is run');
// };
//
// var gopnik = new Gopnik('Vasya');
// gopnik.spinSpinner();
// var user = new User('Vlad', 'Kovalyov');
// user.showFullName();

// function Animal(name) {
// 	this.speed = 0;
// 	this.name = name;
// }
//
// Animal.prototype.run = function(speed) {
// 	this.speed += speed;
// 	l(this.name + ' run with speed ' + this.speed);
// };
//
// Animal.prototype.stop = function() {
// 	this.speed = 0;
// 	l(this.name + ' is stop');
// };

class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
		this._age = null;
	}

	run(speed) {
		this.speed += speed;
		l(this.name + ' run with speed ' + this.speed);
	}

	stop() {
		this.speed = 0;
		l(this.name + ' is stop');
	}

	set age(value) {
		try {
			// if (!value) throw new Error();
			// this._age = value;
			lalala;
		} catch (e) {
			console.log(e);
		}

	}

	get age() {
		return this._age;
	}

	static animaIsGuest(name) {
		if (name) return new Animal(name);
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super();
		this.name = name;
		this.speed = 0;
	}

	jump() {
		this.speed++;
		l(this.name + ' Jump');
	}
}

var animal = new Animal('Wolf');

animal.run(3);
animal.run(10);
animal.stop();

animal.age = 100;
l(animal.age);

l(Animal.animaIsGuest('Vlad'));

var rabbit = new Rabbit('Rabbit Vasya');
rabbit.jump();
rabbit.run(10);

// function CoffeeMachine(power) {
// 	var waterAmount = 0;
//
// 	var WATER_HEAT_CAPACITY = 4200;
//
// 	function getTimeToBoil() {
// 		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
// 	}
//
// 	this.run = function() {
// 		setTimeout(function() {
// 			alert( 'Кофе готов!' );
// 		}, getTimeToBoil());
// 	};
//
// 	this.setWaterAmount = function(amount) {
// 		waterAmount = amount;
// 	};
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();


//
// function Rabbit(name) {
// 	this.name = name;
// 	this.speed = 0;
// }
//
// // Наследование
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;
// // ----------------
//
// Rabbit.prototype.jump = function() {
// 	this.speed++;
// 	l(this.name + ' Jump');
// };
//
// var rabbit = new Rabbit('Rabbit Vasya');
// l(rabbit);
//
// rabbit.run(1);
//
// rabbit.jump();
//
// Rabbit.prototype.run = function() {
// 	this.speed++;
// 	this.jump();
// };

