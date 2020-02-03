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
                    c[i].replace("&#12","");
                    var img=document.createElement("img");
                    img.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+c[i]+"_!!2200740969161.jpg";
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
function loadJS( url, callback ){
    var script = document.createElement('script'),
        fn = callback || function(){};
    script.type = 'text/javascript';
    //IE
    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        };
    }else{
        //其他浏览器
        script.onload = function(){
            fn();
        };
    }
    script.src = url;
    document.body.appendChild(script);
}