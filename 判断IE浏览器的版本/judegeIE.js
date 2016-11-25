function isIe(){
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0")
    {
        return true;
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0")
    {
        return true;
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")
    {
        return true;
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
    {
        return true;
    } else{
        return false;
    }
    
}

//时间冒泡
  if (e.stopPropagation) {   
    // 针对 Mozilla 和 Opera   
    e.stopPropagation();   
    }   
    else if (window.event) {   
    // 针对 IE   
    window.event.cancelBubble = true;   
    } 
}