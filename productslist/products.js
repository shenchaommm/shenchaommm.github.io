function getProductsData(){
    var productsArray=[];
    productsArray[0]={id:"607508532845",
        title:"创思照明国AA级智能调光LED护眼台灯显指Ra98专业读写台灯45分钟定时休息小夜灯",
        model:"自动调光国AA级",
        des:"给孩子一个明亮有趣保护视力的学习环境",
        img:["O1CN01JikepV2HXmwOCcufL","O1CN01zVWgAA2HXmvkWlN6a","O1CN012IiR7o2HXmvi6kxNQ","O1CN01Td8mg02HXmvm5DVx4"],
        att:["国AA级","全光谱","Ra98","19W","SOFT柔光技术","小夜灯","智能感光","45定时休息"]};
    productsArray[3]={id:"607508532845",
        title:"国AA级智能伴睡LED护眼台灯显指Ra98专业读写台灯45分钟定时休息小夜灯",
        model:"高品质国AA级",
        des:"可以伴您入睡的专业级阅读写字台灯",
        img:["O1CN01JikepV2HXmwOCcufL","O1CN01zVWgAA2HXmvkWlN6a","O1CN012IiR7o2HXmvi6kxNQ","O1CN01Td8mg02HXmvm5DVx4"],
        att:["国AA级","全光谱","Ra98","19W","SOFT柔光技术","小夜灯","智能伴睡","45定时休息"]};
    productsArray[1]={id:"609852422088",
        title:"创思照明国A级LED护眼台灯书桌小学生阅读学习儿童写字灯保视力折叠调光",
        model:"高色显读写台灯",
        des:"环面发光照度达国A级，色显高达Ra97",
        img:["O1CN01uWCXGb2HXmwUrn1mW","O1CN01msrwn12HXmw4GBDjW","O1CN01sMzfcs2HXmvuavs7e","O1CN01jXxlGW2HXmw2gvvwl"],
        att:["国A级照度","全光谱","Ra97","9W","滑动调光","柔和自然光"]};
    productsArray[2]={id:"611068352761",
        title:"创思照明国AA级专业读写台灯学生书桌阅读护眼台灯儿童学习全光谱写字灯",
        model:"AA级入门",
        des:"身体虽小但能量巨大",
        img:["O1CN018ZiCoH2HXmwOZdr46","O1CN01msrwn12HXmw4GBDjW","O1CN01sMzfcs2HXmvuavs7e","O1CN01jXxlGW2HXmw2gvvwl"],
        att:["国AA级照度","全光谱","Ra95","13W","SOFT柔和自然光","三档调光","60s延迟关灯"]};
    return productsArray;
}
function getProductData(idn){
    var data=getProductsData();
    var id=idn;
    if(!data) return null;
    if(!Array.isArray(data)) return null;
    var product=[];
    if(!Array.isArray(idn)){
       id=[];
       id[0]=idn;
    }
    for(i=0;i<data.length;i++){
        for(j=0;j<id.length;j++){
            if(data[i].id==id[j]) {
                product.push(data[i]);
                break;
            }
        }
    }
    return product;
}
function getProductDataByKeywords(key){
    if(!key) key="所有产品";
    var productslistData;
    if(key=="所有产品"||key=="创思照明"||key=="Chance"||key=="创思"){
        return getProductsData();
    }else{
        
    var keywords=key.split(" ");
    var data=getProductsData();
    if(!data) return null;
    if(!Array.isArray(data)) return null;
    var products=[];
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
            products.push(data[i]);
        }
    }
    if(products.length==0)return false;
    return products;
    }
}