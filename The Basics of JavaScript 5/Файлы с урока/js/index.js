'use strict';

function l(str) {
	console.log(str);
}

// function Article() {
// 	this.countComments = null;
// }
//
// Article.maxComments = function(a, b) {
// 	return a.countComments > b.countComments ? a : b;
// };
//
// var article1 = new Article();
// article1.countComments = 10;
//
// var article2 = new Article();
// article1.countComments = 20;
//
//
// console.log(Article.maxComments(article1, article2));
// var userData = {
// 	name: 'Vlad',
// 	sex: 'male',
// 	age: 20
// };
//
// function User() {
// 	this.sayHi = function() {
// 		alert(this.name);
// 	}
// }
// new Date()
// Date('2016')
// new Date('2016', 20, 2011),
//
//
// 	User.createAnonymous = function() {
// 		var user = User;
// 		user.name = 'Аноним';
// 		return user;
// 	};
//
// User.createFormDate = function(userData) {
// 	var user = User;
// 	user.name = userData.name;
// 	user.age = userData.age;
// 	return user
// };
//
// var user = User.createAnonymous();
// console.log(user);
//
// var user2 = User.createFormDate(userData);
// console.log(user2);


// function CustomString() {
//
// }

// func.call(context, arg1, arg2, ...)

// function showFullName(firstPart, secondPart, age) {
// 	l(this[firstPart] + " " + this[secondPart]  + " " + this[age]);
// }
//
// var userdata = {
// 	firstName: 'Vlad',
// 	lastName: 'Kovalyov',
// 	age: 20
// };
//
// showFullName.call(userdata, 'firstName', 'lastName', 'age');
// showFullName.call(userdata, 'firstName', 'age');


// function a() {
// 	console.log(this);
// 	this.console.log('Window');
// 	var self = this;
//
// 	function b() {
//
// 	}
// }
//
// a.call(this);


// function printArgs() {
// 	var join = [].join;
//
// 	// var argStr = arguments.join(':');
// 	var argStr = join.call(arguments, ':');
//
// 	l(argStr);
// }
//
// printArgs(1, 2, 3, 4);
//
// function sum(arr) {
// 	return arr.reduce(function(a, b) {
// 		return a + b;
// 	})
// }

// l(sum([1, 2, 3, 4]));

/** It's work perfectly */
// function sumArgs() {
// 	arguments.reduce = [].reduce;
// 	// return arguments.reduce(arguments, function(a, b) {
// 	// 	return a + b
// 	// });
//
// 	return [].reduce.call(arguments, function(a, b) {
// 		return a + b
// 	})
// }
//
// l(sumArgs(4, 5, 6));


// func.call(context, arg1, arg2, ...)
// func.apply(context, [arg1, arg2])

// function showFullName(firstPart, secondPart) {
// 	l(this[firstPart] + " " + this[secondPart]);
// }
//
// var userdata = {
// 	firstName: 'Vlad',
// 	lastName: 'Kovalyov',
// 	age: 20
// };
// var arrayOfArguments = ['firstName', 'age'];
//
// showFullName.call(userdata, 'firstName', 'lastName');
// showFullName.apply(userdata, arrayOfArguments);
//
//
// function sum(arr) {
// 	return arr.reduce(function(a, b) {
// 		return a + b;
// 	})
// }

// l(sum([1, 2, 3, 4]));

// setTimeout(function() {
// 	l('Привет');
// }, 1000);
//
// var user = {
// 	firstName: 'Vlad',
// 	sayHi: function() {
// 		l(this.firstName)
// 	}
// };
//
// setTimeout(user.sayHi, 1000);
//
// setTimeout(function() {
// 	user.sayHi();
// }, 1000);
//
// function bind(func, context) {
// 	return function() {
// 		return func.apply(context, arguments);
// 	}
// }
// function f() {
// 	l(this)
// }
//
// var g = bind(f, "Context");
// g();
//
// var user = {
// 	firstName: 'Vlad',
// 	sayHi: function(who) {
// 		l(this.firstName + " " + who);
// 	}
// };
//
// var sayHi = bind(user.sayHi, user);
//
// sayHi('Vova');
// sayHi('Petya');
//

function f(a, b) {
	l(this);
	l(a + b);
}

var g = f.bind(this);
g(1, 2);













