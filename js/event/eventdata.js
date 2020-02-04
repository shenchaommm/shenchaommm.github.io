function getEventData(para,num){
    var eventData=[];
    eventData[0]={
        title:"武汉加油，中国加油",
        sub:"戴口罩，勤洗手，少去人群聚集处",
        date:"2020.1.28",
        surface:"",
        link:"1",
        event:"k",
        top:"t"
    }
    eventData[1]={
        title:"您的“护眼”灯真的护眼吗？",
        sub:"#护眼知识#蓝光、色温、亮度是购买台灯时，要考量的指标。",
        date:"2020.1.06",
        surface:"",
        link:"2",
        event:"k",
        top:"t"
    }
    
    var eventsData=eventData.reverse();
    if(para=="s") return eventsData;
    var events=[];
    if(num>eventsData.length||num==0) return eventsData;
    if(para=="a"){
        events=eventsData;
    }else if(isNaN(para)){
        for(i=0;i<eventsData.length;i++){
            if(eventsData[i].event==para||eventsData[i].top==para){
                events.push(eventsData[i]);
            }else if(para==eventsData[i].event+eventsData[i].top){
                events.push(eventsData[i]);
            }else{
                events=eventsData;
            }
        }

    }
    if(events.length<=num){
        return events;
    }else{
        return events.slice(0,num);
    }
}
function getEventDataByKeywords(key){
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