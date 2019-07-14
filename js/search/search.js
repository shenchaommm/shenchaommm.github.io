addLoadEvent(initSearchList);
function initSearchList(){
    var keywords=decodeURI(getQueryVariable("keywords"));
    if(!keywords) keywords="所有产品";
    document.getElementById("pkeywords").innerText=keywords;
    document.getElementsByTagName("title")[0].innerText=keywords+"+搜索结果";
    var temp=productsSearch(keywords,3);
    if(!temp) {
        searchError();
    }else{
        var productslist=document.getElementById("productslist");
        var div=document.createElement("div");
        var a=document.createElement("a");
        a.href="productslist.html?keywords="+keywords;
        a.innerHTML="<p><span class='iconfont icon-right'></span></p>查看更多";
        div.appendChild(a);
        div.className="searchmoreproducts";
        productslist.appendChild(div);
    }
    setsearch(keywords);
}
function searchError(){
    document.getElementById("productslist").innerText="没有找到相关产品";
}