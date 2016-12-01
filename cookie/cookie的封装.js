//DOM二级
function addEvent(oBox,sEvent,afn){
	for(var i = 0;i<afn.length;i++){
		if(oBox.addEventListener){
		oBox.addEventListener(sEvent,afn[i],false);
		}else{
			oBox.attachEvent("on"+sEvent,afn[i]);
		}
	}
}

//设置cookie
function setCookie(sKey,sValue,passDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+passDay);
	document.cookie = sKey+"="+sValue+"; expires="+oDate;
}
//获取cookie
function getCookie(sKey){
	var aCookie =document.cookie.split("; ");
	var result = "";
	for(var i = 0;i<aCookie.length;i++){
		var aCook =aCookie[i].split("=");
		if(aCook[0] === sKey){
				result=aCook[1];
			}
	}
	return result;
}

//获取className
function getByClass(oBox,oClass){
	var oTag = oBox.getElementsByTagName("*");
	var aTag = [];
	var reg = new RegExp(oClass,'g');
	for(var i = 0;i<oTag.length;i++){
		if(reg.test(oTag[i].className)){
			aTag.push(oTag[i]);
		}
	}
	return aTag;
}

//Ajax 的异步
function fnAjax(url,fnSuc){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("MSXML2.XMLHttp");
	}	
	xhr.open("GET",url,false);
	xhr.send(null);
	//xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//var aData = eval();	
				fnSuc(xhr.responseText);
			}else{
				alert(xhr.status);
			}
		}
	//}
}
//Ajax的同步
function fnAjax(url,fnSuc){	
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("MSXML2.XMLHttp");
	}
	xhr.open("GET",url,true);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//var aData = eval();	
				fnSuc(xhr.responseText);
			}else{
				alert(xhr.status);
			}
		}
	}
}




















