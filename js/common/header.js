function headerContent(){
    var header='<div class="header maxwidth">'+
    '<div id="manu" class="manu_left">'+
        '<button class="manu_button nav_button" id="manubutton"><span class="iconfont icon-menu" id="menuiconfont" data-menutype="menu"></span></button>'+
        '<ul id="menulist" class="menulist maxwidth"></ul>'+
    '</div>'+    
    '<div class="logo logo_middle">'+
        '<a href="index.html"><img src="image/logo/logo.png"/></a>'+
    '</div>'+
    '<div class="manu_right">'+
        '<button class="manu_button search_button" id="manusearch"><span class="iconfont icon-search" data-menutype="search"></span></button>'+
        '<input id="searchinput" class="searchinput" />'+
    '</div>'+
    '<script type="text/javascript" src="js/menu/menulist.js"></script>'+
    '<script type="text/javascript" src="js/menu/menu.js"></script>'+
'</div>';
    return header;
}
document.writeln(headerContent());