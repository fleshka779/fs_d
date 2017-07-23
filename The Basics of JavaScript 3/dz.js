
/**
 * Написать функцию которая принимает массив данных, и отдает массив типов данных,
 * элементов массива который передали в функцию;
 * Написать валидацию на массив который передали функцию;
 * @example
 *  function arrayTypes ( ['Яблоко', 'Апельсин', 'Груша', 1, true, 3, false]) { ... }
 *  return ["string", "string", "string", "number", "boolean", "number", "boolean"]
 * @param array
 * @returns {Array}
 */

// Код тут


/**
 * Написать контактную книгу в которой есть 3 публичных метода, и 2 приватный (подсказка)
 *
 * @tutorial
 *
 * @method add
 * @public
 * @description Принимает два параметра имя и телефон, имя должно быть string, телефон number
 * 1) Сделать валидацию входных данных
 * 2) У каждого контакта должно быть 3 поля (name, phone, id), id Должен автоматически инкрементироваться
 *    при добавлении контакта.
 *
 * @method get
 * @public
 * @description Выводит в консоль списко всех контактов
 *
 * @method delete
 * @public
 * @description
 * 1) Сделать валидацию входных данных
 * 2) Удаление елемента по индексу
 *
 * @constructor ContactBook
 */
function ContactBook() {
	// Код тут
}

var myContactBook = new ContactBook();

/** Добавление */
myContactBook.add('Test', +380997778833);

/** Получение */
console.log(myContactBook.get());

/** Удаление и получение нового списка */
myContactBook.deleteByIndex(5);
console.log(myContactBook.get());