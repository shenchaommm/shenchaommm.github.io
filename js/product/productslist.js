addLoadEvent(initProductsList);
function initProductsList(){
    var keywords=decodeURI(getQueryVariable("keywords"));
    if(!keywords) keywords="所有产品";
    if(keywords=="false") keywords="所有产品";
    document.getElementById("pkeywords").innerText=keywords;
    document.getElementsByTagName("title")[0].innerText=keywords+"+产品列表";
    var temp=productsSearch(keywords,0);
    if(!temp) searchError();
}
function searchError(){
    document.getElementById("productslist").innerText="没有找到相关产品";
}