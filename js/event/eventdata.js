function getEventData(para,num){
    var eventData=[];
    eventData[4]={
        title:"武汉加油，中国加油",
        sub:"戴口罩，勤洗手，少去人群聚集处",
        date:"2020.1.28",
        surface:"",
        link:"1",
        event:"k",
        top:"t"
    }
    eventData[0]={
        title:"使用条款",
        sub:"使用本网站前请您仔细阅读以下条款",
        date:"2020.1.05",
        surface:"",
        link:"4",
        event:"c",
        top:"t"
    }
    eventData[1]={
        title:"隐私与Cookie",
        sub:"使用本网站前请您仔细阅读以下条款",
        date:"2020.1.05",
        surface:"",
        link:"5",
        event:"c",
        top:"t"
    }
    eventData[2]={
        title:"关注创思照明",
        sub:"扫描二维码，关注我们的微博，微信公众号和抖音，时刻获取最新资讯。",
        date:"2020.1.06",
        surface:"",
        link:"3",
        event:"c",
        top:"t"
    }
    eventData[3]={
        title:"您的“护眼”灯真的护眼吗？",
        sub:"#护眼知识#蓝光、色温、亮度是购买台灯时，要考量的指标。",
        date:"2020.1.06",
        surface:"",
        link:"2",
        event:"k",
        top:"t"
    }
    eventData[5]={
        title:"2020年春节上班说明",
        sub:"因疫情影响，2020年节后上班作如下调整",
        date:"2020.2.11",
        surface:"",
        link:"6",
        event:"c",
        top:"t"
    }
    
    var eventsData=eventData.reverse();
    if(para=="s") return eventsData;
    var events=[];
    //if(num>eventsData.length||num==0) return eventsData;
    if(!Array.isArray(para)){
    if(para=="a"){
        events=eventsData;
    }else if(isNaN(para)){
        for(i=0;i<eventsData.length;i++){
            if (events.length>num && num>0) break;
            if(eventsData[i].event==para||eventsData[i].top==para){
                events.push(eventsData[i]);
            }else if(para==eventsData[i].event+eventsData[i].top){
                events.push(eventsData[i]);
            }
        }

    }
    console.log(events);
    if(events.length<=num||num==0){
        return events;
    }else{
        return events.slice(0,num);
    }
    }else if(Array.isArray(para)){
        for(i=0;i<para.length;i++){
            events[i]=[];
        }
        var l=0;
        for(i=0;i<eventsData.length;i++){
            if(l>para.length*num && num>0) break;
            for(j=0;j<para.length;j++){
                if (events[j].length>num && num>0) break;
                if(eventsData[i].event==para[j]||eventsData[i].top==para[j]){
                    events[j].push(eventsData[i]);
                    l++;
                }else if(para[j]==eventsData[i].event+eventsData[i].top){
                    events[j].push(eventsData[i]);
                    l++;
                }
            }
        }
        for(i=0;i<events.length;i++){
            if(events[i].length>num){
                events[i].slice(0,num);
            }
        }
        return events;
    }
    return false;
}
function getEventDataByKeywords(key){
    if(key==="公司趣事") return getEventData("c",0);
    else if(key==="热点话题") return getEventData("k",0);
    var data=getEventData("s",0);
    if(!key||key=="所有事件") return data;
    var keywords=key.split(" ");
    if(!data) return null;
    if(!Array.isArray(data)) return null;
    var event=[];
    for(i=0;i<data.length;i++){
        var m=0;
        var datastr=JSON.stringify(data[i]);
        for(j=0;j<keywords.length;j++){
            
            if(datastr.match(eval("/"+keywords[j]+"/i"))){
                m++;
            }else{
                break;
            }
        }
        if(m==keywords.length){
            event.push(data[i]);
        }
    }
    if(event.length==0)return false;
    return event;
}