'use strict'

let logo = document.querySelector('.logo__title');
let homeLink = document.querySelector('#home');
let projectsLink = document.querySelector('#projectsLink');
let projectsSection = document.querySelector('#projects');

let aboutLink = document.querySelector('#aboutLink');
let aboutSection = document.querySelector('#about');

let hobbiesLink = document.querySelector('#hobbiesLink');
let hobbiesSection = document.querySelector('#hobbies');

let menuLinks = document.querySelectorAll('.menu__link');
let menuLinksArray = [...menuLinks];

let burgerBtn = document.querySelector('.burger__menu');
let linksBlock = document.querySelector('.links__block');
let navBar = document.querySelector('#navBar');
let navCont = document.querySelector('.logo__block');

let scrollHeight = () => {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return scrollTop;
}
logo.addEventListener('click', () => {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});

projectsLink.addEventListener('click', (e) => {
	let y = projectsSection.getBoundingClientRect().top + pageYOffset;
	let scrollTo = y - navBarHeight;
	window.scroll({
		top: scrollTo,
		left: 0,
		behavior: 'smooth'
	});
	menuLinksArray.forEach(link => {
		link.classList.remove('active');
		projectsLink.classList.add('active');
		linksBlock.classList.remove('shown');
		navCont.classList.remove('contShown');
		burgerBtn.classList.remove('active__burger');
	})
});

aboutLink.addEventListener('click', (e) => {
	menuLinksArray.forEach(link => {
		link.classList.remove('active');
		aboutLink.classList.add('active');
		linksBlock.classList.remove('shown');
		navCont.classList.remove('contShown');
		burgerBtn.classList.remove('active__burger');
	})
});

hobbiesLink.addEventListener('click', (e) => {
	menuLinksArray.forEach(link => {
		link.classList.remove('active');
		hobbiesLink.classList.add('active');
		linksBlock.classList.remove('shown');
		navCont.classList.remove('contShown');
		burgerBtn.classList.remove('active__burger');
	})
});

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active__burger');
	linksBlock.classList.toggle('shown');
	navBar.classList.toggle('navShown');
	navCont.classList.toggle('contShown');
})