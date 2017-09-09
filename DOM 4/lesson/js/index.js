// 'use strict';
//
class CommentForm {
	constructor() {
		this.textarea = null;
		this.commentBlock = null;
		this.commentId = 0;

		this._getMainElements();
	}

	_getMainElements() {
		this.textarea = this._findElement('.comment-input');
		this.commentBlock = this._findElement('.comment-block');
	}

	_findElement(query) {
		if (!document.querySelector(query)) {
			throw new TypeError('Element is not found');
		} else {
			return document.querySelector(query);
		}

	}

	_createCommentDomElement(message) {
		var el = document.createElement('div');
		el.innerText = message;
		// el.onclick = fn
		el.setAttribute('id', this.commentId.toString());
		this.commentId++;
		return el;
	}

	addComment() {
		var inputValue = this.textarea.value;

		if (inputValue) {
			this.commentBlock.appendChild(this._createCommentDomElement(inputValue));
			this.textarea.value = '';
		}
	}



}
// //
var commentForm = new CommentForm();

// /** Find child in parent */
// var post = document.querySelector('.post');
// var comment = document.querySelector('.comment');
//
// // var result = post.contains(comment);
// //
// // console.log(result);
//
//
// var result = post.compareDocumentPosition(comment);
//
// console.log(result);
//
// // 0 nodeA и nodeB - один и тот же узел
// // 1 Узлы в разных документах
// // 2 nodeB предшествует nodeA
// // 4 nodeA предшествует nodeB
// // 8 nodeB содержит nodeA
// // 16 nodeA содержит nodeB
// // 32 Зарезервировано для браузера
//
// var p = document.querySelector('p');
// var ul = document.querySelector('ul');
// var li = document.querySelector('li');
//
// // console.log(ul.compareDocumentPosition(p)); // 2 = 10
//
// var span = document.createElement('span');
// var secondElement = document.querySelector('.sub-comments:nth-child(2)');
//
// // post.appendChild(textEl);
// secondElement.insertBefore(span, null);
// /** Создать елемент span и ваставить его во второй .sub-comments */
//
//
// var article = document.querySelector('.article');
// var commentsBlock = document.querySelector('.comments-block');
// var cloneCommentBlock = commentsBlock.cloneNode(false);
//
// article.appendChild(cloneCommentBlock);
//
// // article.removeChild(document.querySelector('.comments-block'));
//
// article.replaceChild(span, commentsBlock);
//
// var =

// var ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// for (var i = 0; i < 5; i++) {
// 	ul.appendChild(li)
// }

// setTimeout(function() {
// 	var ul = document.createElement('ul');
// 	document.body.appendChild(ul);
//
// 	for (var i = 0; i < 5; i++) {
// 		var li = document.createElement('li');
// 		ul.appendChild(li)
// 	}

	// var ul = document.createElement('ul');
	// for (var i = 0; i < 5; i++) {
	// 	var li = document.createElement('li');
	// 	ul.appendChild(li)
	// }
	// document.body.appendChild(ul);
// }, 5000)

