function eventSearch(keywords,num){
    var eventlistData=getEventDataByKeywords(keywords);
    if(!eventlistData) {
        return false;
    }
    if(!Array.isArray(eventlistData)) {
        return false;
    }
    var l=eventlistData.length
    if(eventlistData.length>num && num>0){
        l=num;
    }
    var eventlist=document.getElementById("eventlist");
    for(i=0;i<l;i++){
        //if(!Array.isArray(productslistData[i])) continue;
        //if(productslistData[i].length<3) continue;
        var eventdiv=document.createElement("div");
        var eventtitle=document.createElement("h3");
        var eventsub=document.createElement("p");
        var eventdate=document.createElement("span");
        eventtitle.innerText=eventlistData[i].title;
        eventsub.innerText=eventlistData[i].sub;
        eventdate.innerText=eventlistData[i].date;
        var eventbutton=document.createElement("a");
        eventbutton.innerHTML="<span>去看看</span>";
        eventbutton.href="event.html?id="+eventlistData[i].link;
        eventdiv.appendChild(eventtitle);
        eventdiv.appendChild(eventsub);
        eventdiv.appendChild(eventdate);
        eventdiv.appendChild(eventbutton);
        eventlist.appendChild(eventdiv);
    }
    if(eventlistData.length>num && num>0){
        var eventlist=document.getElementById("eventlist");
        var div1=document.createElement("div");
        var a1=document.createElement("a");
        a1.href="eventlist.html?keywords="+keywords;
        a1.innerHTML="<p><span class='iconfont icon-right'></span></p>查看更多";
        div1.appendChild(a1);
        div1.className="searchmoreproducts";
        eventlist.appendChild(div1);
    }
    return true;
}
