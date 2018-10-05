var post=0;
var countdel=0;
var vniz=800;
setInterval(Delete,20000);

function Delete(){
	console.log("открываю меню")
//document.getElementsByClassName('userContentWrapper')[0].children[0].children[0].children[0].children[0].click();	
try{document.querySelectorAll( 'button[title="Закрыть"]' )[0].click();}
catch(e){}
Vniz();
document.querySelectorAll( 'a[aria-label="Параметры новостей"]' )[0].click();
console.log("открыл меню")
setTimeout(ClickUdalyt, 1500);
}


function ClickUdalyt(){
						
var ul=document.getElementsByClassName('uiContextualLayer')[document.getElementsByClassName('uiContextualLayer').length-1].children[0].children[0].children[0]


for(var i=ul.childElementCount-1;i>=0;i--){
	try{	
//	console.log(ul.children[i].children[0].outerText); // вывод строки
	if(ul.children[i].children[0].outerText=="Удалить"||ul.children[i].children[0].outerText=="Удалить\n"){
		console.log('удаляю!');
	ul.children[i].children[0].click(); //Нажимаем кнопку
		countdel++;
		break;
	}else if(ul.children[i].children[0].outerText=="Скрыть из хроники\n"||ul.children[i].children[0].outerText=="Скрыть из хроники\n"){
		ul.children[i].children[0].click(); //Нажимаем кнопку
	console.log('скрываю!')
	break;
	}
}catch(e){}
}
// document.getElementsByTagName("ol")[0].children[0].children[0].children[0];

post++;

  setTimeout(Podtverdit, 1000);
}

function Podtverdit(){
document.getElementsByClassName("layerConfirm")[0].click();
inform();

}
function Vniz(){
window.scrollTo(0, vniz);
//vniz=vniz+200;	
}

function inform(){
	console.log("действие выполнено над "+countdel+"постами")
}

/* document.getElementsByTagName("ol")[0].children[0].children[0].children[0];
document.querySelectorAll( 'a[aria-label="Параметры новостей"]' )[0].click();
document.querySelectorAll( 'button[title="Закрыть"]' )[0].click();
document.querySelectorAll( 'a[aria-label="Параметры новостей"]' )[6].click();
element.parentNode.removeChild(element);

document.querySelectorAll( 'a[class="ProfileTweet-actionButton"]' )[0].click();
--------------------------------------
document.getElementsByClassName("ProfileTweet-actionButton")[0].click();
document.getElementsByClassName("js-actionDelete")[0].children[0].click();
document.getElementsByClassName("delete-action")[0].click();

*/
