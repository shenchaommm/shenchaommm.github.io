addLoadEvent(initmenu);
function initmenu(){
    var menu=document.getElementById("manubutton");
    menu.addEventListener("click",onMenuClick,false);
    document.getElementById("manusearch").addEventListener("click",onMenuClick,false);
    document.getElementById("searchinput").addEventListener("keypress",onkeyPress,false);
    var menulist=document.getElementById("menulist");
    menulist.addEventListener("click",closeMenu,false);
    var data=getmenulist();
    for(i=0;i<data.length;i++){
        var li=document.createElement("li");
        var a=document.createElement("a");
        if(typeof(data[i][0])==Array){
            
        }else{
            a.innerText=data[i][0];
            a.href=data[i][1];
            li.appendChild(a);
            menulist.appendChild(li);
        }
            
    }
    
}
function onMenuClick(){
    var menuicon=document.getElementById("menuiconfont");
    var button=this.getElementsByTagName("span")[0];
    var type=button.getAttribute("data-menutype");
    if(type=="menu"){
        menuicon.className="iconfont icon-close";
        menuicon.setAttribute("data-menutype","close");
        var menulist=document.getElementById("menulist");
        addClass(menulist,"menulistshow");
        
        document.documentElement.style.overflow='hidden';
        document.body.style.overflow='hidden';

    }else if(type=="close"){
        menuicon.className="iconfont icon-menu";
        menuicon.setAttribute("data-menutype","menu");
        var menulist=document.getElementById("menulist");
        removeClass(menulist,"menulistshow");
        document.documentElement.style.overflow='';
        document.body.style.overflow='';
    }else if(type=="search"){
        var searchinput=document.getElementById("searchinput");
        if(hasClass(searchinput,"searchinputshow")){
            var value=searchinput.value;
            if(value) window.location.href="search.html?keywords="+value;
        }
        setsearch(null);
    }else if(type=="left"){
        menuicon.className="iconfont icon-menu";
        menuicon.setAttribute("data-menutype","menu");
        var searchinput=document.getElementById("searchinput");
        removeClass(searchinput,"searchinputshow");
    }
}
function openMenu(){
    
}
function closeMenu(){
    var menuicon=document.getElementById("menuiconfont");
    menuicon.className="iconfont icon-menu";
    menuicon.setAttribute("data-menutype","menu");
    var menulist=document.getElementById("menulist");
    removeClass(menulist,"menulistshow");
    document.documentElement.style.overflow='auto';
    document.body.style.overflow='auto';
}
function onkeyPress(e){
    var evt = window.event || e; 
    if (evt.keyCode == 13){
        var searchinput=document.getElementById("searchinput");
        if(hasClass(searchinput,"searchinputshow")){
            var value=searchinput.value;
            if(value) window.location.href="search.html?keywords="+value;
        }
    }
}
function setsearch(keywords){
    var menuicon=document.getElementById("menuiconfont");
    if(menuicon.getAttribute("data-menutype")=="close") closeMenu();
    var searchinput=document.getElementById("searchinput");
    menuicon.className="iconfont icon-left";
    menuicon.setAttribute("data-menutype","left");
    addClass(searchinput,"searchinputshow");
    if(keywords) searchinput.value=keywords;
}