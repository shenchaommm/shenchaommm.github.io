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
    };
    eventData[0]={
        title:"使用条款",
        sub:"使用本网站前请您仔细阅读以下条款",
        date:"2020.1.05",
        surface:"",
        link:"4",
        event:"c",
        top:"t"
    };
    eventData[1]={
        title:"隐私与Cookie",
        sub:"使用本网站前请您仔细阅读以下条款",
        date:"2020.1.05",
        surface:"",
        link:"5",
        event:"c",
        top:"t"
    };
    eventData[2]={
        title:"关注创思照明",
        sub:"扫描二维码，关注我们的微博，微信公众号和抖音，时刻获取最新资讯。",
        date:"2020.1.06",
        surface:"",
        link:"3",
        event:"c",
        top:"t"
    };
    eventData[3]={
        title:"您的“护眼”灯真的护眼吗？",
        sub:"#护眼知识#蓝光、色温、亮度是购买台灯时，要考量的指标。",
        date:"2020.1.06",
        surface:"",
        link:"2",
        event:"k",
        top:"t"
    };
    eventData[5]={
        title:"2020年春节上班说明",
        sub:"因疫情影响，2020年节后上班作如下调整",
        date:"2020.2.11",
        surface:"",
        link:"6",
        event:"c",
        top:"t"
    };
    eventData[6]={
        title:"#护眼知识#LED台灯护眼么 几瓦合适",
        sub:"#护眼知识#LED台灯优缺点分析，帮助你更好的了解您的台灯。",
        date:"2020.2.13",
        surface:"",
        link:"7",
        event:"k",
        top:"t"
    };
    eventData[7]={
        title:"#护眼知识#儿童爱眼护眼小知识之食物篇",
        sub:"我们日常的饮食中，一些蔬菜对眼睛以致其他生理机能的保养都有很大的益处。",
        date:"2020.3.2",
        surface:"",
        link:"8",
        event:"k",
        top:"t"
    };
    eventData[8]={
        title:"全面复工通知",
        sub:"因疫情影响，做好防疫工作的同时，我们已经全面复工，欢迎新老朋友莅临。",
        date:"2020.3.2",
        surface:"",
        link:"9",
        event:"c",
        top:"t"
    };
    eventData[9]={
        title:"什么是仿生自然光技术",
        sub:"模拟自然光在自然界的折射与漫反射，从而形成接近自然光的光线。",
        date:"2020.3.7",
        surface:"",
        link:"10",
        event:"k",
        top:"t"
    };
    eventData[10]={
        title:"什么是全光谱高色显",
        sub:"创思定制全光谱LED芯片，高色显，还原真实的色彩。",
        date:"2020.3.7",
        surface:"",
        link:"11",
        event:"k",
        top:"t"
    };
    eventData[11]={
        title:"可爱的我们",
        sub:"了解我们的团队、工作氛围和想法。认识那些塑造公司美好愿景的创造者们。",
        date:"2020.3.11",
        surface:"",
        link:"12",
        event:"c",
        top:"t"
    };
    eventData[12]={
        title:"技术驱动",
        sub:"了解我们的科研实验室，探索LED的精彩世界。",
        date:"2020.3.12",
        surface:"",
        link:"13",
        event:"c",
        top:"t"
    };
    eventData[13]={
        title:"台灯生产",
        sub:"了解我们如何生产台灯，了解我们的品质把控。",
        date:"2020.3.12",
        surface:"",
        link:"14",
        event:"k",
        top:"t"
    };
    eventData[14]={
        title:"社会责任",
        sub:"了解我们如何努力成为值得每个孩子和每个家庭信赖的负责的伙伴，如何体现社会责任。",
        date:"2020.3.12",
        surface:"",
        link:"15",
        event:"c",
        top:"t"
    };
    eventData[15]={
        title:"可持续发展",
        sub:"了解我们在环境保护和可持续发展方面的努力。",
        date:"2020.3.12",
        surface:"",
        link:"16",
        event:"c",
        top:"t"
    };
    eventData[16]={
        title:"售后服务须知",
        sub:"坚持以顾客为中心的服务原则，了解最新的售后服务政策。",
        date:"2020.4.20",
        surface:"",
        link:"17",
        event:"c",
        top:"t"
    };
    eventData[17]={
        title:"常见问题",
        sub:"自助获取大家常见问题和解答。",
        date:"2020.4.22",
        surface:"",
        link:"18",
        event:"c",
        top:"t"
    };
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
            if(l>=para.length*num && num>0) break;
            for(j=0;j<para.length;j++){
                if (events[j].length>=num && num>0) continue;
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
        console.log(events);
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