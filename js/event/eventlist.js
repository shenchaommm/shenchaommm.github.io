addLoadEvent(initEventList);
function initEventList(){
    var keywords=decodeURI(getQueryVariable("keywords"));
    if(!keywords) keywords="所有事件";
    if(keywords=="false") keywords="所有事件";
    document.getElementById("ekeywords").innerText=keywords;

    document.getElementsByTagName("title")[0].innerText=keywords+" 创思照明";
    var temp=eventSearch(keywords,0);
    if(!temp) searchError();
}
function searchError(){
    document.getElementById("eventlist").innerText="没有找到相关信息";
}