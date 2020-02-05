addLoadEvent(initEvent);
function initEvent(){
    var id=getQueryVariable("id");
    if(!id) return;
    loadJS("js/event/eventlist/"+id+".js",function(){
        var title=getTitle();
        var date=getDate();
        var contant=getContant();
        if(title && date && contant){
            var eventTitle=document.getElementById("eventTitle");
            var h=document.createElement("h2");
            h.innerText=title;
            eventTitle.appendChild(h);
            var p=document.createElement("p");
            p.innerText=date;
            eventTitle.appendChild(p);
            var eventContant=document.getElementById("eventContant");
            var c=contant.split("&#10");
            for(i=0;i<c.length;i++){
                if(c[i].match("&#12")){
                    var img=document.createElement("img");
                    img.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+c[i].replace("&#12","")+"_!!2200740969161.jpg";
                    eventContant.appendChild(img);
                }else{
                    var cp=document.createElement("p");
                    cp.innerText=c[i];
                    eventContant.appendChild(cp);
                }
            }
        }
    })
}