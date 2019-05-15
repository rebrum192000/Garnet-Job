var msk = document.querySelector('.page-main__map-city-msk');
var spb = document.querySelector('.page-main__map-city-spb');
var yar = document.querySelector('.page-main__map-city-yar');
var mskValue = document.querySelector('.page-main__map-city-msk-value');
var spbValue = document.querySelector('.page-main__map-city-spb-value');
var yarValue = document.querySelector('.page-main__map-city-yar-value');
var yarMap = document.querySelector('.page-main__map-city-yar-g');
var mskMap = document.querySelector('.page-main__map-city-msk-g');
var spbMap = document.querySelector('.page-main__map-city-spb-g');

msk.onclick =  function() {
	mskValue.classList.add("yes");
	mskValue.classList.remove("no");
	spbValue.classList.add("no");
	spbValue.classList.remove("yes");
	yarValue.classList.add("no");
	yarValue.classList.remove("yes");

	mskMap.classList.add("yes");
	mskMap.classList.remove("no");
	spbMap.classList.add("no");
	spbMap.classList.remove("yes");
	yarMap.classList.add("no");
	yarMap.classList.remove("yes");

	msk.classList.add("activated");
	spb.classList.remove("activated");
	yar.classList.remove("activated");

}
spb.onclick =  function() {
	spbValue.classList.add("yes");
	spbValue.classList.remove("no");
	mskValue.classList.add("no");
	mskValue.classList.remove("yes");
	yarValue.classList.add("no");
	yarValue.classList.remove("yes");
	
	spbMap.classList.add("yes");
	spbMap.classList.remove("no");
	mskMap.classList.add("no");
	mskMap.classList.remove("yes");
	yarMap.classList.add("no");
	yarMap.classList.remove("yes");

	msk.classList.remove("activated");
	spb.classList.add("activated");
	yar.classList.remove("activated");
}
yar.onclick =  function() {
	spbValue.classList.add("no");
	spbValue.classList.remove("yes");
	mskValue.classList.add("no");
	mskValue.classList.remove("yes");
	yarValue.classList.add("yes");
	yarValue.classList.remove("no");

	yarMap.classList.add("yes");
	yarMap.classList.remove("no");
	spbMap.classList.add("no");
	spbMap.classList.remove("yes");
	mskMap.classList.add("no");
	mskMap.classList.remove("yes");

	msk.classList.remove("activated");
	spb.classList.remove("activated");
	yar.classList.add("activated");
}
