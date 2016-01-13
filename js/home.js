// JavaScript Document
function removeElement(_element){
         var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);
         }
}
function closeLoading(){
	//document.getElementById("loadingIcon").style.top="5%";
	//var middle=document.getElementsByClassName("middle");
	//for(var i=0;i<middle.length;i++){
	//middle[i].style.top="10%";
	//middle[i].style.opacity=1;
		//}
	var t=document.getElementsByClassName("dot")[0];
	t.addEventListener("webkitAnimationIteration", function(){ //动画结束时事件 
		removeElement(	document.getElementById("loadingIcon"));
		showLoading();
	}, false);
	init();
	
	};
function closedLoading(){
	document.getElementById("loading").style.opacity="0";	
	window.setTimeout(closedLoadingT,1500);
	}
function closedLoadingT(){
	removeElement(	document.getElementById("loading"));
	$("#invitation").css("top","0%");
	}
	function showLoading(){
		$("#loadingText").css("opacity","1");
		$("#loadingTextCover").animate({left:"100%"},1000,function(){
			$("#loadingTexth2").animate({opacity:"0"},1000,function(){
				$("#loadingTexth2").text("2●21");
				$("#loadingTexth2").animate({opacity:1},500,function(){
					$("#loadingTexth2").animate({opacity:0},1000,function(){
						$("#loadingTexth2").text("一 起");
						$("#loadingTexth2").animate({opacity:1},500,function(){
							$("#loadingTexth2").animate({opacity:0},1000,function(){
								$("#loadingTexth2").text("见证幸福");
									$("#loadingTexth2").animate({opacity:1},500,function(){
										$("#loadingTexth2").animate({opacity:0},1000,function(){
											$("#loadingTexth2").text("").css({"background-image":"url(pic/jqgl.png)"
											});
											$("#loadingText").css({"-webkit-transform":"rotate(10deg)","transform":"rotate(10deg)"});
											$("#loadingTexth2").animate({opacity:1},200,function(){
												closedLoading();
											})
										})
									})

							})
						})
					})
				})
			})
		});
		
	}

function preloadimages(arr){   
    var newimages=[], loadedimages=0
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
			useingImage(newimages);
			closeLoading();
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost();
			alert("loadImageError,Check netconnect");
		}
    }
}
function useingImage(arr){
	var imagesPic=document.getElementsByClassName("image");
	for(var i=0;i<imagesPic.length;i++){
		imagesPic[i].src=arr[i].src;
		}
	var middlePic=document.getElementsByClassName("middlePic");
	//middlePic[0].src=arr[13].src;
	//middlePic[1].src=arr[14].src;
	var janPic=document.getElementById("janPic");
	janPic.src=arr[15].src;
	var sjPic=document.getElementById("sjPic");
	sjPic.src=arr[16].src;
	var mapPic=$("#mapPic").children("a").css("background-image","url("+arr[8].src+")");
	
//	var phonePic=document.getElementsByClassName("phone");
//	phonePic[0].src=arr[10].src;
//	phonePic[1].src=arr[10].src;
	}
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
	
	addLoadEvent(preLoadImages);
	function preLoadImages(){
		var map="pic/map1.png";
		var temp=goBack();
		if(temp=="#w"){
			map="pic/map2.png";
			$(".mapPic").attr("href","http://api.map.baidu.com/marker?location=29.990492,120.889937&title=洁儿家&content=上虞梁湖外梁湖村新路230号&output=html ");
			$("#invitationTime").text("中午10点");
		}
				preloadimages(['pic/hsz/j1.jpg', 'pic/hsz/j2.jpg', 'pic/hsz/j3.jpg','pic/hsz/j4.jpg','pic/hsz/j5.jpg','pic/hsz/j6.jpg','pic/bg1.jpg','pic/logo.png',map,'pic/QRcode.jpg','pic/phone.png','pic/SJH.png','pic/e1.png','pic/jqgl.png','pic/m1.png','pic/jan.png','pic/t1.png','pic/ht2.gif','pic/hsz/j10.jpg','pic/hsz/j11.jpg', 'pic/hsz/j12.jpg', 'pic/hsz/j13.jpg']);
		}
	function init(){
		if(navigator.userAgent.indexOf("Android")>-1){
			$(".bg").css("background-attachment","scroll");
			
			}
		var ww=window.innerWidth;
		wy=window.innerHeight;
		//$("body,html").css({"width":ww+"px","height":wy+"px"});
		$(".image").css({"max-height":0.6*wy+"px","max-width":0.8*ww+"px"});
		var invitation=document.getElementById("invitation");
		invitation.addEventListener("mousedown",pullstart,false);																												
		//invitation.addEventListener("touchstart",pullstart,false);
		invitation.addEventListener("mouseup",pullEnd,false);
		//invitation.addEventListener("touchend",pullEnd,false);
		var audio=document.getElementById("audio");
		audio.addEventListener("click",audioPlay,false);
		var envelop=document.getElementById("envelop");
		envelop.addEventListener("touchstart",pullTouchstart,false);
		envelop.addEventListener("touchend",pullEnd,false);
		iy=envelop.offsetTop;
		cards=document.getElementsByClassName("card");
		cardsParent=document.getElementsByClassName("cardP");
		cardsParent[0].style.zIndex=1;
		window.addEventListener('popstate',goBack, false);
		backState=new Array();
		var background=document.getElementById("background");
		var nav=document.getElementById("nav");
		navArray=nav.children;
		backgroundArray=background.children;
		currentNum=0;
		for(var i=1;i<backgroundArray.length-1;i++){
			backgroundArray[i].style.backgroundImage="url(pic/hsz/j1"+i+".jpg)";
			//$(bc[i]).css("background-attachment","fixed");
			}
		var fz = parseInt($("body").css("font-size"));
		$("#mapPic").css({"height":0.7*wy-8*fz+"px","width":0.7*ww-2*fz+"px"});
		$("#timeFoot").css("height",0.7*wy-11*fz+"px");
		$("#sjx").css("border-right-width",ww+"px");
		var audio=document.getElementById("audioPlay");
		//audio.play();
		audioState();
	}
	var wy;
	var iy,y;
	var cards;
	var cardsParent;
	var backgroundArray;
	var navArray;
function audioPlay(e){
	var audio=this.getElementsByTagName("audio")[0];
	if(audio.paused)audio.play();
	else audio.pause();
	audioState();
	}
function audioState(){
	var audio=document.getElementById("audioPlay");
	//if(audio.paused)audio.play();
	if(audio.paused)
	$("#audio").css("right","-0.8em");
	else 
		$("#audio").css("right","0em");

	}
var audioNum=1;
var showBigHeart=false;
function audioNext(){
	var audio=document.getElementById("audioPlay");
	audioNum++;
	if(audioNum>10)audioNum=1;
	audio.src="music/"+audioNum+".mp3";
	audio.play();
	}
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
	var audio=document.getElementById("audioPlay");
	if(audio.currentTime==0&& audio.paused) audio.play();
	audioState();
	$("#tipRight").addClass("tip");
	window.setTimeout(function(){
	$("#tipRight").removeClass("tip");
	removeElement(document.getElementById("tipRight"));
		},5000);
	}
function showCards(){
	for(var i=1;i<cards.length;i++){
		//cardsParent[i].style.display="block";
		cardsParent[i].style.opacity=1;
		//cards[i].style.zIndex=cards.length-i;
		var deg=Math.round((Math.random()-Math.random())*20);
		if(i>1&&i<cards.length-1){
			$(cards[i]).css({"transform":"rotate("+deg+"deg)","-webkit-transform":"rotate("+deg+"deg)"});
			
		}
		if(i%2==0){
				cardsParent[i].style.top=i*wy+"px";
		}else {
				cardsParent[i].style.top=(wy*(i-0.1))+"px";
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
	var invitationCard=document.getElementById("invitationCard");
	invitationCard.addEventListener("touchstart",swipeStart,false);
	invitationCard.addEventListener("touchend",swipeEnd,false);
	invitationCard.addEventListener("mousedown",swipeStart,false);
	invitationCard.addEventListener("mouseup",swipeEnd,false);
	
/*	$("#invitationCard").on("swipeleft",function(){
		var div=this.children;
		div[0].style.transform="rotateY(-"+180+"deg)";
				div[1].style.transform="rotateY("+0+"deg)";

	});
	$("#invitationCard").on("swiperight",function(){
		var div=this.children;
		div[0].style.transform="rotateY("+0+"deg)";
				div[1].style.transform="rotateY("+180+"deg)";
		
		});*/
	var nav=document.getElementById("nav");
	nav.style.opacity=0.5;
	$("#day").on("tap",showDay);
	initTime();
	Scrollbackground=$("#background");
	Scrollnav=$("#nav");
	Scrolldiv=$("#viewBox");
	Scrollbackground.children("div:first").css("background-image","url(pic/hsz/j10.jpg)");
	//window.addEventListener("touchstart",scrollStart,false);
	//window.addEventListener("touchend",scrollEnd,false);
	//window.addEventListener("mousedown",scrollStart,false);
	//window.addEventListener("mouseup",scrollEnd,false);
	var bgh=Scrollbackground.children("div:first").css("background-size");
	}
var sx,sy;
function swipeStart(e){
	var touch=e;
	if(e.touches)
	touch=e.touches[0];
	sx=touch.pageX;
	sy=touch.pageY;
	this.addEventListener("touchmove",swipeMove,false);
	this.addEventListener("mousemove",swipeMove,false);
	}
function swipeMove(e){
	var touch=e;
	if(e.touches)
	touch=e.touches[0];

	if(Math.abs(sx-touch.pageX)>Math.abs(sy-touch.pageY)){
		if(sx-touch.pageX>30){
			var div=this.children;
			$(div[0]).css({"transform":"rotateY(-"+180+"deg)","-webkit-transform":"rotateY(-"+180+"deg)"});
			$(div[1]).css({"transform":"rotateY("+0+"deg)","-webkit-transform":"rotateY("+0+"deg)"});
			this.removeEventListener("touchmove",swipeMove,false);
			this.removeEventListener("mousemove",swipeMove,false);

		}else if(sx-touch.pageX<-30){
			var div=this.children;
			$(div[0]).css({"transform":"rotateY("+0+"deg)","-webkit-transform":"rotateY("+0+"deg)"});
			$(div[1]).css({"transform":"rotateY("+180+"deg)","-webkit-transform":"rotateY("+180+"deg)"});
			this.removeEventListener("touchmove",swipeMove,false);
			this.removeEventListener("mousemove",swipeMove,false);

		}else{
			}
		
		}else{
			this.removeEventListener("touchmove",swipeMove,false);
			this.removeEventListener("mousemove",swipeMove,false);
			}
	}
function swipeEnd(e){
	this.removeEventListener("touchmove",swipeMove,false);
	this.removeEventListener("mousemove",swipeMove,false);
	}
var st,bst,nst,ix,iy,isstart=false;
var Scrollbackground,Scrollnav,Scrolldiv;
var currentNum=0;
function slideStart(e){
	Scrolldiv.stop(true,true);
	Scrollbackground.stop(true,true);
	Scrollnav.stop(true,true);

	var touch=e;
	if(e.touches)
	touch=e.touches[0];
	ix=touch.pageX;
	iy=touch.pageY;
	bst=Scrollbackground.scrollTop();
	nst=Scrollnav.scrollTop();
	st=this.scrollTop;
	if(st>5*wy){
		bst=1.4*st;
		nst=0.8*st;
		}
	isstart=true;
	this.addEventListener("touchmove",slideMove,false);
	this.addEventListener("mousemove",slideMove,false);
	}
function slideMove(e){
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
	if(isstart==true){
		if(Math.abs(ix-touch.pageX)>Math.abs(iy-touch.pageY)){
			this.removeEventListener("touchmove",slideMove,false);
			this.removeEventListener("mousemove",slideMove,false);

			isstart=false;
			return;
			}
		else if(Math.abs(ix-touch.pageX)<=Math.abs(iy-touch.pageY))
			isstart=false;
		
		}
	e.preventDefault();
	//if(Math.abs(touch.pageY-iy)>50){
		var plus=(touch.pageY-iy)/Math.abs(touch.pageY-iy);
			//cardsParent[i].style.top=cardsParent[i].offsetTop+plus*wy+"px";
		//currentNum=currentNum-plus;
		//if(currentNum<0)currentNum=0;
		//if(currentNum>cards.length)currentNum=cards.length;
		/*if(currentNum==cards.length){
			$(this).animate({scrollTop:6*wy+"px"},800);
			return;
			}*/
		
		Scrolldiv.scrollTop(st+(iy-touch.pageY));
/*			this.removeEventListener("touchmove",slideMove,false);
			this.removeEventListener("mousemove",slideMove,false);
			*/	
		if(Scrolldiv.scrollTop()<5*wy){
		Scrollbackground.scrollTop(bst+1.4*(iy-touch.pageY));
		Scrollnav.scrollTop(nst+0.8*(iy-touch.pageY));
		}
	//}
	//$("#background").scrollTop($("#background").scrollTop()+iy-touch.pageY);
	}
function slideEnd(e){
	isstart=false;
	var touch=e;
	if(e.touches)
		touch=e.touches[0];
		var scrollt=this.scrollTop;
		if(st-scrollt>50){
			//scroll to pre
			currentNum--;
			/*var tip=document.getElementById("tip");
			if(st>tip.offsetTop){
				$(this).animate({scrollTop:tip.offsetTop},500);
				//$("#background").animate({scrollTop:tip.offsetTop},500);
			}else{
			$(this).animate({scrollTop:st-wy},500);}*/
			
			}
		else if(scrollt-st>50){
			//scroll to next
						currentNum++;

/*			$(this).animate({scrollTop:st+wy},500);
*/		}else{
			
			/*$(this).animate({scrollTop:st},500);*/
			}
			this.removeEventListener("touchmove",slideMove,false);
	this.removeEventListener("mousemove",slideMove,false);

			if(currentNum<0)currentNum=0;
		if(currentNum>cards.length)currentNum=cards.length;
		if(currentNum==cards.length){
			Scrolldiv.animate({scrollTop:6*wy+"px"},800);
			return;
			}
			Scrolldiv.animate({scrollTop:cardsParent[currentNum].offsetTop+"px"},800,function(){
				if(currentNum==4&&showBigHeart==false){
					showHeart();
				}
			});
			Scrollbackground.animate({scrollTop:backgroundArray[currentNum].offsetTop+"px"},800);
			Scrollnav.animate({scrollTop:navArray[currentNum].offsetTop+"px"},800);
		

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
			timeDay.innerHTML="<span>"+parseInt(days*24)+"</span>"+"小时";
		}else{
			timeDay.innerHTML="<span>"+parseInt(days)+"</span>"+"天";
		}
		
		}
function initMap(){
		var map = new BMap.Map("allmap");    // 创建Map实例
    var poi = new BMap.Point(120.880927,29.991904);
	map.centerAndZoom(poi, 14);
	var marker = new BMap.Marker(poi);
  	map.addOverlay(marker);
	
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
			if(i<4){
				
			}
			//parent.style.transform="rotate("+deg+"deg)";
			
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
			parent.style.display="block";
			parent.style.top=picH*0.5-0.5*images[i].offsetHeight+"px";
			parent.style.left=left+15*(i+1)+"px";
			//parent.style.transform="rotate("+0+"deg)";

			left+=parent.offsetWidth;
			}
	picture.style.overflowX="scroll";
	//picture.removeEventListener("click",showPicture,false);
	$(picture).off("tap",showPicture);
	}
function showPicture(e){
	if(showpic==true) return;
	picH1=this.parentNode.offsetTop;
	showpic=true;
	initShowPic();
	//$(this).on("touchstart",picStartScroll);
	//$(this).on("touchend",picEndScroll);
	//$(this).on("mousedown",picStartScroll);
	//$(this).on("mouseup",picEndScroll);

	//this.parentNode.scrollIntoView();
	//this.class="show";
	
	}
function closePicture(){
	var picture=document.getElementById("image");
	showpic=false;
	//picture.class="card";
	initPic();
	
	//$(picture).off("touchstart",picStartScroll);
	//$(picture).off("touchend",picEndScroll);
		//$(this).off("mousedown",picStartScroll);
	//$(this).off("mouseup",picEndScroll);

	}
var showDayState=false,dayH1;
function showDay(){
	if(showDayState==false){
		dayH1=this.parentNode.offsetTop;
		showDayState=true;
		$("#timeFoot").css("bottom","-6em");
	}else{
		closeDay();	
	}
	}
function closeDay(){
		showDayState=false;
	$("#timeFoot").css("bottom","0em");
	
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
	var sl=$(this).scrollLeft();
	$(this).scrollLeft(sl+px-touch.pageX);
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
function goBack(){
	var history=window.history;
	var location=window.location;
  
  if (location.hash){
    //do something(state.url, state.title);
	return location.hash;
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
		if(showDayState==true && (scrolltop>(dayH1+wy/4)|| scrolltop<(dayH1-wy/4))){
			closeDay();
		}
	
	//var n=parseInt((scrolltop)/wy);
	//var px=(scrolltop%wy)

//indow.onscroll=function(){
	
	
//}
	//$(cards[n+1]).animate({top:Math.round(0.3*px+wy*n+0.9*wy)},10);
	//$(cards[n+1]).css("top",Math.round(0.3*px+wy*n+0.9*wy)+"px");
	
}
     
   function showHeart(){
	   var bgH=document.getElementById("bigheart");
	   var pos=[[20,0,0.2],[80,0,0.2]];
	   for(var i=0;i<pos.length;i++){
		   var div=document.createElement("div");
		   div.style.height=6.8*pos[i][2]+"%";
		   div.style.width=6.8*pos[i][2]+"%";
		   div.style.left=pos[i][1]+"%";
		   div.style.top=pos[i][0]+"%";
		   
		}
	}
function showHeart(){
	   var bgH=document.getElementById("bigheart");
	   var pos=[[20,2,1,70],[18,2,0.4,140],[15,4,0.3,100],[17,6,0.5,150],[10,5.5,0.7,190],[5,11,0.9,80],[15,10,0.3,200],[12,13,0.5,-140],[10,18,0.3,190],[27,2,0.5,-50],[28,7,0.3,-50],[31,5,0.9,0],[37,8,0.7,-45],[1.5,18,1.1,135],[13,18,0.6,-30],[17,10,2.1,0],[32,13,0.3,30],[35.5,13,0.3,135],[32,17,0.5,10],[36,14,1.5,135],[0.5,29,0.9,-90],[9,24,1.5,10],[19,30,0.9,-85],[25,25,1.2,90],[33,21,0.5,135],[33,26,0.7,180],[38.5,28,0.65,-45],[43,26,1,-30],[7,32,0.6,-10],[1,39,2,30],[12,36,0.6,0],[17,39,0.8,-90],[25,35,0.6,180],[24,41,0.6,-90],[29,39,0.7,-45],[33,33,0.9,30],[41,35,0.9,-150],[7,54,1.5,100],[16,46,1.1,-10],[24,48,0.6,-70],[18,57,0.9,-40],[24,55,0.8,170],[30,43,2,-30],[45,45,0.9,-150],[43,52,0.7,170],[30,57,0.9,-100],[15,66,0.7,180],[19,67,1.2,45],[28,62,0.3,90],[25,64,0.4,45],[28,66,0.8,-100],[37,58,1.5,200],[46,59,0.4,20],[47,64,0.75,185],[27.5,74,0.9,-90],[33,70,1.2,-10],[32,80,0.7,-60],[42,73,0.6,100],[46,72,1,150],[35,80,1.6,65],[45,80,0.3,-30],[47,81,1.2,-30],[45,91,1.5,0]
	   ,[55,88,0.6,-140],[55,79,1.3,100],[65,79,0.7,150],[63,75,0.4,100],[51,62,2.2,30],[65.5,71,1.2,45],[74,71,0.5,85],[76,64,1.2,135],[67,57,1.6,100],[62,59,0.8,190],[48,55,0.9,30],[58,57,0.4,90],[79,59,0.6,-150],[84,59,0.9,-110],[88,55,0.7,-45],[78,54,0.6,45],[82,49,1,80],[68,49,1,40],[65,55,0.6,30],[60,50,0.8,145],[51,48,1.2,-30],[46,34,1.6,50],[57,43,0.5,90],[60,41,1.2,80],[68,41,0.4,90],[72,38,2.1,-20],[88,41,1.6,-120],[96,38,0.4,-20],[95,32,0.6,80],[87,31,1.2,-170],[84,33,0.3,45],[75,34,0.5,80],[66,32,0.9,30],[62,34,0.6,180],[59,38,0.3,135],[55,31,0.7,-60],[49,22,1.2,60],[58.5,27,0.9,-100],[63,23,0.7,-140],[56,21,0.7,45],[69,21,1.5,-135],[78,26,0.8,140],[83.5,25,1,30],[92,23,1.2,-60],[90,13,0.9,180],[89,21,0.5,-70],[80,14,1.3,150],[60,14,1.1,80],[54,14,0.9,30],[57,7,0.9,180],[62,3,0.7,200],[66,4.5,2.2,35],[77.5,18.5,0.4,0],[75,1,0.7,-120],[80,4,0.3,100],[81.5,4,0.85,160],[88,9,0.5,40],[86,12,0.3,35]];
	   for(var i=0;i<pos.length;i++){
		   var div=document.createElement("div");
		   div.style.height=6.8*pos[i][2]+"%";
		   div.style.width=6.8*pos[i][2]+"%";
		   $(div).css({"transform":"rotate("+pos[i][3]+"deg)","-webkit-transform":"rotate("+pos[i][3]+"deg)"});
		   div.style.left=pos[i][0]+"%";
		   div.style.top=pos[i][1]+"%";
		   bgH.appendChild(div);
		   $(div).delay(3000*Math.random()).animate({opacity:1},300);
		   $("#jan").delay(3500).animate({opacity:1},1000);
		   $("#sj").delay(5000).animate({opacity:1},800);
		}
		showBigHeart=true;
	}