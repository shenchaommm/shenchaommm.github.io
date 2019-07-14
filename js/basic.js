function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;}
	else{
		window.onload=function(){
			oldonload();func();}
		}
	}
function insertAfter(newElement, targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
		}
	}
    
function hasClass(ele, cls) {
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
function addClass(element,value){
    if(hasClass(element,value)) return;
	if(!element.className){
		element.className=value;}
	else{
		newClassName=element.className+" "+value;
		element.className=newClassName;
		}
    }
    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
function removeElement(_element){
        var _parentElement = _element.parentNode;
        if(_parentElement){
               _parentElement.removeChild(_element);
        }
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       if (query==null) return false;
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}