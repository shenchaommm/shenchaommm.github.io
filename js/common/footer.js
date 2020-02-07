function footerContent(){
    var footer='<div class="footer">'+   
    '<div class="footermenu">'+
        '<div><a href="index.html"><img src="image/logo/logo.png"/></a></div>'+
        '<div><a href="event.html?id=4">使用条款</a>'+
        '<a href="event.html?id=5">隐私与Cookie</a>'+
        '<a href="aboutcontact.html">联系我们</a>'+
        '<a href="productslist.html">我们的产品</a>'+
        '<a href="about.html">关于我们</a></div>'+
    '</div>'+
    '<div class="footerfoot">'+
        '<a>©2020创思照明</a>'+
    '</div>'+
'</div>';
    return footer;
}
document.writeln(footerContent());