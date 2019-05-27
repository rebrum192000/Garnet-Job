<?php
$text = $_POST['text'];
$cv = $_POST['cv'];
// mail("manager@odobri.online","suport@odobri.online", "Заявка с сайта", "Сопроводительное письмо:".$text.". Резюме: ".$cv,"From: ceo@garnet.house \r\n")

mail("rebrum1920@mail.ru", "Заявка с сайта", "Сопроводительное письмо:".$text.". Резюме: ".$cv,"From: rebrum1920@mail.ru \r\n")
?>

<script>
function changeurl(){
	eval(self.location="http://ca35978.tmweb.ru/");
}
	window.setTimeout("changeurl();",0);

    var thankJS = document.querySelector('.thank');
	var thShadowJS = document.querySelector('.thank-shadow');
	thankJS.setAttribute("style", "display:block");
	thShadowJS.setAttribute("style", "display:block");
</script>