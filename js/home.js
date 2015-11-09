// JavaScript Document
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
	
function addClass(element,value){
	if(!element.className){
		element.className=value;}
	else{
		newClassName=element.className+" "+value;
		element.className=newClassName;
		}
	}
	
	addLoadEvent(init);
	function init(){
		var invitation=document.getElementById("invitation");
		invitation.addEventListener("mousedown",pullstart,false);
		//invitation.addEventListener("touchstart",pullstart,false);
		invitation.addEventListener("mouseup",pullEnd,false);
		//invitation.addEventListener("touchend",pullEnd,false);
		var envelop=document.getElementById("envelop");
		envelop.addEventListener("touchstart",pullTouchstart,false);
		envelop.addEventListener("touchend",pullEnd,false);
		iy=envelop.offsetTop;
		cards=document.getElementsByClassName("card");
		cardsParent=document.getElementsByClassName("cardP");
		cards[0].style.zIndex=cardsParent.length;
		envelop.style.zIndex=cardsParent.length+1;
		wy=window.innerHeight;
		var allmapPic=document.getElementById("allmapPic");
		allmapPic.addEventListener("click",showBaiduMap,false);
		window.addEventListener('popstate',goBack, false);
		backState=new Array();
		
		
	}
	var wy;
	var iy,y;
	var cards;
	var cardsParent;
function pullTouchstart(e){
	e.preventDefault();
	var touch=e.touches[0];
	x=touch.pageX;
	y=touch.pageY;
	var envelop=document.getElementById("envelop");
	envelop.innerText=x+" "+y+" "+iy;
	this.addEventListener("touchmove",pullMove,false);
	}
function pullstart(e){
	e.preventDefault();
	e=e||e.touches[0];
	x=e.clientX;
	y=e.clientY;
	if(e.target.id=="envelop")
	this.addEventListener("mousemove",pullMove,false);
	this.addEventListener("touchmove",pullMove,false);
	}
function pullMove(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	var ty=touch.pageY;
	var tx=touch.pageX;
	var envelop=document.getElementById("envelop");
	var dis=envelop.offsetTop-y+e.pageY;
	if(iy<=dis)
	envelop.style.top = dis+"px";
	x=tx;
	y=ty;
	cards[0].innerText=x+" "+y+" "+dis;
	}
	var backState;
function pullEnd(e){
	var touch=e||e.touches[0];
		var envelop=document.getElementById("envelop");
		this.removeEventListener("mousemove",pullMove,false);
		if(envelop.offsetTop>window.innerHeight*0.6){
			envelop.style.display="none";
			beginShow();
			showCards();
			
			}else{
			envelop.style.top=iy+"px";
				
				}
	}
	
function beginShow(){
	
	
	
	}
function showCards(){
	for(var i=1;i<cards.length;i++){
		cardsParent[i].style.display="block";
		cards[i].style.zIndex=cards.length-i;
		var deg=Math.round((Math.random()-Math.random())*30);
		if(i>1)
		cards[i].style.transform="rotate("+deg+"deg)";
		cards[i].style.top=100*i-10+"vh";
		
		}
	initPic();
	
	
	
	}
function initPic(){
	var picture=document.getElementById("image");
		picH=picture.offsetHeight;
		picW=picture.offsetWidth;
		var images=picture.getElementsByTagName("img");
		for(var i=0;i<images.length;i++){
			images[i].style.top=picH*0.5-0.5*images[i].offsetHeight+"px";
			images[i].style.left=picW*0.5-0.5*images[i].offsetWidth+"px";
			var deg=Math.round((Math.random()-Math.random())*30);
			images[i].style.transform="rotate("+deg+"deg)";

			
			}
			picture.style.overflowX="visible";
	picture.addEventListener("click",showPicture,false);
	
	}
	var showpic=false;
	var picH1;
function initShowPic(){
	
	var picture=document.getElementById("image");
	var images=picture.getElementsByTagName("img");
	var left=0;
	for(var i=0;i<images.length;i++){
		
			images[i].style.top=picH*0.5-0.5*images[i].offsetHeight+"px";
			images[i].style.left=left+"px";
			images[i].style.transform="rotate("+0+"deg)";

			left+=images[i].offsetWidth;
			}
	picture.style.overflowX="scroll";
	picture.removeEventListener("click",showPicture,false);
	}
function showPicture(e){
	if(showpic==true) return;
	picH1=this.parentNode.offsetTop;
	$('html,body').animate({scrollTop:$(this.parentNode).offset().top},{ duration: 300, complete: function(){
		
		showpic=true;
		
		}});
	initShowPic();

	//this.parentNode.scrollIntoView();
	//this.class="show";
	
	}
function closePicture(){
	var picture=document.getElementById("image");
	showpic=false;
	//picture.class="card";
	initPic();
	}
	
function showBaiduMap(e){
	
	//setBack("showBaiduMap",document.title,"#showBaiduMap");
	
	}
	
function setBack(state,title,url){
	var history=window.history;
	history.pushState(state, title, url);		
	}
function goBack(e){
	var history=window.history;
	var location=window.location;
  
  if (location.hash){
    //do something(state.url, state.title);
	if(location.hash=="showPic"){
		}
  }else{
	  //closePicture();
	  }
  
  
  }
window.onscroll=function(){
	var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		if(showpic==true && (scrolltop>(picH1+wy/4)|| scrolltop<(picH1-wy/4))){
			closePicture();
		}
	
	var n=parseInt((scrolltop)/wy);
	var px=(scrolltop%wy)
	cards[n+1].style.top=Math.round(0.3*px+wy*n+0.9*wy)+"px";
	
}