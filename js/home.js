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
	var dis=envelop.offsetTop-y+touch.pageY;
	if(iy<=dis)
	envelop.style.top = dis+"px";
	x=tx;
	y=ty;
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
		cardsParent[i].style.opacity=1;
		//cards[i].style.zIndex=cards.length-i;
		var deg=Math.round((Math.random()-Math.random())*30);
		if(i>1){
		cards[i].style.transform="rotate("+deg+"deg)";
		cardsParent[i].style.top=140*i+"vh";
		}else {
		cardsParent[i].style.top=140*i+"vh";
			}
		}
	var viewBox=document.getElementById("viewBox");
	//document.body.style.overflowY="scroll";
	//viewBox.style.overflowY="auto";
	viewBox.addEventListener("touchstart",slideStart,false);
	viewBox.addEventListener("touchend",slideEnd,false);
	viewBox.addEventListener("mousedown",slideStart,false);
	viewBox.addEventListener("mouseup",slideEnd,false);
	viewBox.addEventListener("scroll",vbscrolling,false);
	initPic();
	//viewBox.style.WebKitOverflowScrolling="touch";
	//$("#viewBox").css("-webkit-overflow-scrolling", "touch");
	//$("#invitationCard").on("swipe",divrotate);
	$("#invitationCard").on("swipeleft",function(){
		var div=this.children;
		div[0].style.transform="rotateY(-"+180+"deg)";
				div[1].style.transform="rotateY("+0+"deg)";

	});
	$("#invitationCard").on("swiperight",function(){
		var div=this.children;
		div[0].style.transform="rotateY("+0+"deg)";
				div[1].style.transform="rotateY("+180+"deg)";
		
		});
	var nav=document.getElementById("nav");
	nav.style.opacity=0.5;
	initTime();
	//window.addEventListener("touchstart",scrollStart,false);
	//window.addEventListener("touchend",scrollEnd,false);
	//window.addEventListener("mousedown",scrollStart,false);
	//window.addEventListener("mouseup",scrollEnd,false);

	}
var st=0,ix,iy;
function slideStart(e){
	e.preventDefault();
	$(this).stop(true,true);
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	ix=touch.pageX;
	iy=touch.pageY;
	//st=this.scrollTop;
	this.addEventListener("touchmove",slideMove,false);
	this.addEventListener("mousemove",slideMove,false);
	}
function slideMove(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	st=st-iy+touch.pageY;
	if(st>0)st=0;
	translate=st;
	diyscrollTo(translate,0);
	//this.scrollTop+=iy-touch.pageY;
	//$(this).css({"transform":"translateY("+translate+"px)","-webkit-transform":"translateY("+translate+"px)"});
	
	ix=touch.pageX;
	iy=touch.pageY;
	}
function slideEnd(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
		/*var scrollt=this.scrollTop;
		if(st-scrollt>50){
			//scroll to pre
			var tip=document.getElementById("tip");
			if(st>tip.offsetTop){
				$(this).animate({scrollTop:tip.offsetTop},500);
			}else{
			$(this).animate({scrollTop:st-1.4*wy},500);}
			
			}
		else if(scrollt-st>50){
			//scroll to next
			$(this).animate({scrollTop:st+1.4*wy},500);
		}else{
			
			$(this).animate({scrollTop:st},500);
			}*/
		
	this.removeEventListener("touchmove",slideMove,false);
	this.removeEventListener("mousemove",slideMove,false);

	}
function diyscrollTo(scrollTop,mode){
	if(mode==0){
	for(var i=0;i<cardsParent.length;i++){
	$(cardsParent[i]).css({"transform":"translateY("+(1-0.1*i)*scrollTop+"px)","-webkit-transform":"translateY("+(1-0.1*i)*scrollTop+"px)"});
		}
	$("#nav").css({"transform":"translateY("+0.5*scrollTop+"px)","-webkit-transform":"translateY("+0.5*scrollTop+"px)"});
	}else{
	for(var i=0;i<cardsParent.length;i++){
	$(cardsParent[i]).css({"transform":"translateY("+(1-0.1*i)*scrollTop+"px)","-webkit-transform":"translateY("+(1-0.1*i)*scrollTop+"px)"});
		}
	$("#nav").css({"transform":"translateY("+0.5*scrollTop+"px)","-webkit-transform":"translateY("+0.5*scrollTop+"px)"});
		}
	
	
	
	
	
	}
	function initTime(){
		var d=new Date();
		var Now=d.getTime();
		d.setFullYear(2016,1,21);
		d.setHours(0,0,0,0);
		var theDay=d.getTime();
		var days=(theDay-Now)/3600000/24;
		var timeDay=document.getElementById("timeDay");
		if(days<1){
			timeDay.innerText=parseInt(days*24)+"小时";
		}else{
			timeDay.innerText=parseInt(days)+"天";
		}
		
		}
function initMap(){
		var map = new BMap.Map("allmap");    // 创建Map实例
    var poi = new BMap.Point(120.880927,29.991904);
	map.centerAndZoom(poi, 14);
	var marker = new BMap.Marker(poi);
  	map.addOverlay(marker);
	
	}
function divrotateleft(){
	alert("left");
	$(this).animate({transform:"rotateY("+180+"deg)"},200);
	
	}
function divrotateleft(){
		alert("right");

	$(this).animate({transform:"rotateY(-"+180+"deg)"},200);
	
	}
function initPic(){
	var picture=document.getElementById("image");
		picH=picture.offsetHeight;
		picW=picture.offsetWidth;
		var images=picture.getElementsByTagName("img");
		for(var i=0;i<images.length;i++){
			var parent=images[i].parentNode;
			parent.style.top=picH*0.5-0.5*images[i].offsetHeight+"px";
			parent.style.left=picW*0.5-0.5*images[i].offsetWidth+"px";
			var deg=Math.round((Math.random()-Math.random())*30);
			parent.style.transform="rotate("+deg+"deg)";
 
			
			}
			picture.style.overflowX="visible";
	//picture.addEventListener("click",showPicture,false);
	$(picture).on("tap",showPicture);
	
	}
	var showpic=false;
	var picH1;
function initShowPic(){
	
	var picture=document.getElementById("image");
	var images=picture.getElementsByTagName("img");
	var left=0;
	for(var i=0;i<images.length;i++){
			var parent=images[i].parentNode;
			parent.style.top=picH*0.5-0.5*images[i].offsetHeight+"px";
			parent.style.left=left+15*(i+1)+"px";
			parent.style.transform="rotate("+0+"deg)";

			left+=parent.offsetWidth;
			}
	picture.style.overflowX="scroll";
	//picture.removeEventListener("click",showPicture,false);
	$(picture).off("tap",showPicture);
	}
function showPicture(e){
	if(showpic==true) return;
	picH1=this.parentNode.offsetTop;
	$('#viewBox').animate({scrollTop:picH1},{ duration: 300, complete: function(){
		
		showpic=true;
		
		}});
	initShowPic();
	$(this).on("touchstart",picStartScroll);
	$(this).on("touchend",picEndScroll);
	$(this).on("mousedown",picStartScroll);
	$(this).on("mouseup",picEndScroll);

	//this.parentNode.scrollIntoView();
	//this.class="show";
	
	}
function closePicture(){
	var picture=document.getElementById("image");
	showpic=false;
	//picture.class="card";
	initPic();
	$(picture).off("touchstart",picStartScroll);
	$(picture).off("touchend",picEndScroll);
		$(this).off("mousedown",picStartScroll);
	$(this).off("mouseup",picEndScroll);

	}
var px;
function picStartScroll(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	px=touch.pageX;
	$(this).on("touchmove",picScrolling);
	$(this).on("mousemove",picScrolling);
	}
function picScrolling(e){
		var touch=e;
	if(e.touches)
		touch=e.touches[0];

	this.scrollLeft+=px-touch.pageX;
	px=touch.pageX;
	}
function picEndScroll(e){
	
	$(this).off("touchmove",picScrolling);
		$(this).off("mousemove",picScrolling);

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
  var scrollY=0;
  
function scrollStart(e){
	e.preventDefault();
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	this.addEventListener("touchmove",scrolling,false);
	this.addEventListener("mousemove",scrolling,false);
	scrollY=touch.pageY;
	}
function scrollEnd(e){
	this.removeEventListener("touchmove",scrolling,false);
	this.removeEventListener("mousemove",scrolling,false);
	}
function scrolling(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	var tempY=$(window).scrollTop()-touch.pageY+scrollY;
	$(window).scrollTop(tempY);
	//$('html,body').animate({scrollTop:$(this.parentNode).offset().top});
	scrollY=touch.pageY;
	
	}
 function vbscrolling(e) {
    var scrolltop=$("#viewBox").scrollTop();
		if(showpic==true && (scrolltop>(picH1+wy/4)|| scrolltop<(picH1-wy/4))){
			closePicture();
		}
	
	//var n=parseInt((scrolltop)/wy);
	//var px=(scrolltop%wy)

//indow.onscroll=function(){
	
	
//}
	//$(cards[n+1]).animate({top:Math.round(0.3*px+wy*n+0.9*wy)},10);
	//$(cards[n+1]).css("top",Math.round(0.3*px+wy*n+0.9*wy)+"px");
	
}
      
    