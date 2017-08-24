'use strict';

/**
 * Задача 1
 * Перепишите суммирование аргументов
 * Есть функция sum, которая суммирует все элементы массива:
 */
function sum(arr) {
	return arr.reduce(function(a, b) {
		return a + b;
	});
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
/**
 * Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
 *  */

function sumArgs() {
	/* ваш код */
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

/**
 * Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
 * P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.
 * */


/**
 * Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль
 * и вызывать loginOk/loginFail в зависимости от правильности ответа.
 * Однако, его вызов приводит к ошибке. Почему?
 * Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
 * */


function ask(question, answer, ok, fail) {
	var result = prompt(question, '');
	if (result.toLowerCase() === answer.toLowerCase()) ok();
	else fail();
}

var user = {
	login: 'Василий',
	password: '12345',

	loginOk: function() {
		alert( this.login + ' вошёл в сайт' );
	},

	loginFail: function() {
		alert( this.login + ': ошибка входа' );
	},

	checkPassword: function() {
		ask("Ваш пароль?", this.password, this.loginOk, this.loginFail);
	}
};

user.checkPassword();

/**
 * P.S. Ваше решение должно также срабатывать,
 * если переменная user будет перезаписана, например вместо user.checkPassword() в конце будут строки:
 * */

var vasya = user;
user = null;
vasya.checkPassword();