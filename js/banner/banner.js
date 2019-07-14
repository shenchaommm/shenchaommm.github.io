addLoadEvent(initbanner);
function initbanner(){
    var div=document.getElementById("banner2");
    var div2=document.getElementById("bannerdot");
    var data=getbannercontent();
    for(i=0;i<data.length;i++){
        var li=document.createElement("li");
        var divimagediv=document.createElement("div");
        addClass(divimagediv,"bannerliimgdiv")
        var divimageimg=document.createElement("img");
        divimageimg.src=data[i][2];
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
function onBannerClick(){
    var num=this.getAttribute("data-num");
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