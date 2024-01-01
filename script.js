'use strict';

const btns = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answer');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		btn.children[0].classList.toggle('fa-add');
		btn.children[0].classList.toggle('fa-subtract');
		btns.forEach((btn) => {
			if (btn !== e.currentTarget) {
				btn.children[0].classList.add('fa-add');
				btn.children[0].classList.remove('fa-subtract');
			}
		});
		answers.forEach((answer) => {
			if (answer !== e.currentTarget.parentElement.nextElementSibling)
				answer.classList.remove('active');
		});
		e.currentTarget.parentElement.nextElementSibling.classList.toggle('active');
	});
});
