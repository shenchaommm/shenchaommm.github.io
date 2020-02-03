addLoadEvent(initbanner);
function initbanner(){
    var div=document.getElementById("banner2");
    div.addEventListener("mousedown",onDown,false);
    div.addEventListener("touchstart",onDown,false);
    var div2=document.getElementById("bannerdot");
    var data=getbannercontent();
    for(i=0;i<data.length;i++){
        var li=document.createElement("li");
        var divimagediv=document.createElement("div");
        addClass(divimagediv,"bannerliimgdiv")
        var divimageimg=document.createElement("img");
        divimageimg.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+data[i][2]+"_!!2200740969161.jpg";
        divimagediv.appendChild(divimageimg);
        li.appendChild(divimagediv);
        var divdiscript=document.createElement("div");
        addClass(divdiscript,"bannerlidiscript");
        divdiscript.innerHTML="<h2>"+data[i][0]+"</h2><p>"+data[i][1]+"</p><div><a href='"+data[i][4]+"'>"+data[i][3]+"</a></div>";
        li.appendChild(divdiscript);
        div.appendChild(li);
        var bannerdotspan=document.createElement("span");
        bannerdotspan.setAttribute("data-num",i);
        div2.appendChild(bannerdotspan);
        bannerdotspan.addEventListener("click",onBannerClick,false);
        if(i==0){
            addClass(li,"bannershow");
            addClass(bannerdotspan,"bannerdotshow");
        }
    }
    document.getElementById("banner_left").addEventListener("click",onBannerClick,false);
    document.getElementById("banner_right").addEventListener("click",onBannerClick,false);

}
function onDown(e){
    if(e.targetTouches){
        mouseBX=e.targetTouches[0].clientX;
        mouseBY=e.targetTouches[0].clientY;
        this.addEventListener("touchmove",onMove,false);
        this.addEventListener("touchend",onEnd,false);
    }else{
        mouseBX=e.clientX;
        mouseBY=e.clientY;
        this.addEventListener("mousemove",onMove,{passive: false, capture: false});
        this.addEventListener("mouseup",onEnd,false);
    }
    
    
}
function onMove(e){
    if(e.targetTouches){
        //alert(e.targetTouches);
        //alert(e.targetTouches[0].clientX);
        mouseMX=e.targetTouches[0].clientX;
        mouseMY=e.targetTouches[0].clientY;
        if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
    }else{
        mouseMX=e.clientX;
        mouseMY=e.clientY;
    }
    var x=Math.abs(mouseBX-mouseMX);
    var y=Math.abs(mouseBY-mouseMY);
    if(x>y){
        e.preventDefault();
        //e.stopPropagation(); 
    }
}
function onEnd(e){
    if(e.targetTouches){
        x=e.changedTouches[0].clientX;
        y=e.changedTouches[0].clientY;
    }else{
        x=e.clientX;
        y=e.clientY;
    }
    if(Math.abs(mouseBX-x)>Math.abs(mouseBY-y)){
        if(mouseBX>x){
            BannerSlide("f");
        }else{
            BannerSlide("b");
        }
    }
    this.removeEventListener("mousemove",onMove);
    this.removeEventListener("mouseup",onEnd);
    this.removeEventListener("touchmove",onMove);
    this.removeEventListener("touchend",onEnd);
}
function onBannerClick(){
    var num=this.getAttribute("data-num");
    BannerSlide(num);
}
function BannerSlide(a){
    var num=a;
    var nowshow=document.getElementsByClassName("bannerdotshow")[0];
    var nownum=nowshow.getAttribute("data-num");
    if(num==nownum) return;
    nowshow.className="";
    var span=document.getElementById("bannerdot").getElementsByTagName("span");
    var li=document.getElementById("banner2").getElementsByTagName("li");
    li[nownum].className="";
    var direction="b";
    if(num=="b"){
        nownum--;
        if(nownum<0) nownum=li.length-1;
    }
    else if(num=="f"){
        direction="f"
        nownum++;
        if(nownum>li.length-1)nownum=0;
    }else{
        if(nownum<num) direction="f";
        nownum=num;
    }
    if(direction=="b"){
        li[nownum].className="bannershow bannershowb";
    }else{
        li[nownum].className="bannershow bannershowf";
    }
    span[nownum].className="bannerdotshow";
}
