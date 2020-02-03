addLoadEvent(initSearchList);
function initSearchList(){
    var keywords=decodeURI(getQueryVariable("keywords"));
    if(!keywords) keywords="";
    document.getElementById("pkeywords").innerText=keywords;
    document.getElementsByTagName("title")[0].innerText=keywords+"+搜索结果";
    var temp=productsSearch(keywords,3);
    var temp1=eventSearch(keywords,3);
    if(!temp&&!temp1) {
        searchError();
    }else if(!temp){
        searchNoshow("products");
    }else if(!temp1){
        searchNoshow("event");
    }else{

        

    }
    setsearch(keywords);
}
function searchNoshow(para){
    if(para=="products"){
        document.getElementById("productslist").style.display="none";
    }else if(para=="event"){
        document.getElementById("eventlist").style.display="none";
    }
}
function searchError(){
    document.getElementById("searchresult").innerText="没有找到相关产品";
}