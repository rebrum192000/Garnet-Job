
var mNav = document.querySelector('.page-header--inner-wrap');
var mOpenBtn = document.querySelector('.page-header--btn-burger');
var mLink = document.querySelector('.page-header--nav');
var mSocLink = document.querySelector('.page-header--soc-list');
var mCloseBtn = document.querySelector('.page-header--btn-closed');


if (screen.width < 1250) {

	mOpenBtn.onclick = function() {
	mNav.setAttribute("style", "display:flex");
	};	
	mCloseBtn.onclick = function() {
	mNav.setAttribute("style", "display:none");
	};	
	mLink.onclick = function() {
	mNav.setAttribute("style", "display:none");
	};	
	mSocLink.onclick = function() {
	mNav.setAttribute("style", "display:none");
	};	

} else {
	window.onscroll = function() {

		var sect1 = document.querySelector('.page-main__join');
		var headerSt = document.querySelector('.page-header');
		var wrapSt = document.querySelector('.page-header--wrap');
		var bl1 = document.querySelector('.page-header--soc-list');
		var bl2 = document.querySelector('.page-header--svg-logo');
		var bl3 = document.querySelector('.page-header--btn-answer');
		var suc = document.querySelector('.nav--item__success');

		var scrolled = window.pageYOffset;
		var heightSect1 = sect1.offsetHeight;

		if (scrolled >= heightSect1) {
			headerSt.classList.remove("page-header__static");
			wrapSt.classList.remove("page-header--wrap__static");
			bl1.classList.remove("page-header--soc-list__static");
			bl2.classList.remove("page-header--svg-logo__static");
			bl3.classList.remove("page-header--btn-answer__static");
			suc.setAttribute("style", "display:block");

		} else {
			headerSt.classList.add("page-header__static");
			wrapSt.classList.add("page-header--wrap__static");
			bl1.classList.add("page-header--soc-list__static");
			bl2.classList.add("page-header--svg-logo__static");
			bl3.classList.add("page-header--btn-answer__static");
			suc.setAttribute("style", "display:none");
		};
	};
};
