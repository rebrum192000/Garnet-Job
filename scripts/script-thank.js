var thank = document.querySelector('.thank');
var thShadow = document.querySelector('.thank-shadow');
var thCloseBtn = document.querySelector('.thank--btn-closed');
var thCloseBtn2 = document.querySelector('.thank-button');

thCloseBtn.onclick = function() {
	thank.setAttribute("style", "display:none");
	thShadow.setAttribute("style", "display:none");
};
thCloseBtn2.onclick = function() {
	thank.setAttribute("style", "display:none");
	thShadow.setAttribute("style", "display:none");
};	
thShadow.onclick = function() {
	thank.setAttribute("style", "display:none");
	thShadow.setAttribute("style", "display:none");
};	
