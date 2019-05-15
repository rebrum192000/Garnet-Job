var popUp = document.querySelector('.popup');
var popUpShadow = document.querySelector('.popup-shadow');
var pOpenBtn = document.querySelector('.page-header--btn-answer');
var pOpenBtn2 = document.querySelector('.page-main__join-button');
var pCloseBtn = document.querySelector('.popup--btn-closed');

var pBtnMsk = document.querySelector('.popup--form-btn-msk');
var pBtnSpb = document.querySelector('.popup--form-btn-spb');
var pBtnYar = document.querySelector('.popup--form-btn-yar');

pOpenBtn.onclick = function() {
	popUp.setAttribute("style", "display:flex");
	popUpShadow.setAttribute("style", "display:block");
};
pOpenBtn2.onclick = function() {
	popUp.setAttribute("style", "display:flex");
	popUpShadow.setAttribute("style", "display:block");
};
pCloseBtn.onclick = function() {
	popUp.setAttribute("style", "display:none");
	popUpShadow.setAttribute("style", "display:none");
};	
popUpShadow.onclick = function() {
	popUp.setAttribute("style", "display:none");
	popUpShadow.setAttribute("style", "display:none");
};	

pBtnMsk.onclick = function() {
	pBtnMsk.classList.add("popup--form-btn__active");
	pBtnSpb.classList.remove("popup--form-btn__active");
	pBtnYar.classList.remove("popup--form-btn__active");
};
pBtnSpb.onclick = function() {
	pBtnSpb.classList.add("popup--form-btn__active");
	pBtnMsk.classList.remove("popup--form-btn__active");
	pBtnYar.classList.remove("popup--form-btn__active");
};
pBtnYar.onclick = function() {
	pBtnYar.classList.add("popup--form-btn__active");
	pBtnMsk.classList.remove("popup--form-btn__active");
	pBtnSpb.classList.remove("popup--form-btn__active");
};