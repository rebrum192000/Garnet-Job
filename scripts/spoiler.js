

if (screen.width < 768) {
var spoiler = document.querySelector(".page-main__vac-new-success-link");
var text = document.querySelector(".page-main__vac-new-success-spoiler");
var close = document.querySelector(".page-main__vac-new-success-link-close");

	spoiler.onclick = function() {
		text.setAttribute("style", "display:block");
		spoiler.setAttribute("style", "display:none");
	}
	close.onclick = function() {
		text.setAttribute("style", "display:none");
		spoiler.setAttribute("style", "display:inline-block");
	};
}
else {
	var spoiler = document.querySelector(".page-main__vac-new-success-link2");
	var text = document.querySelector(".page-main__vac-new-success-spoiler");
	var close = document.querySelector(".page-main__vac-new-success-link-close");

	spoiler.onclick = function() {
		text.setAttribute("style", "display:block");
		spoiler.setAttribute("style", "display:none");
	}
	close.onclick = function() {
		text.setAttribute("style", "display:none");
		spoiler.setAttribute("style", "display:inline-block");
	};
}