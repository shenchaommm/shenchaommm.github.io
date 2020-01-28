addLoadEvent(initProduct);
function initProduct(){
    var id=getQueryVariable("id");
    
    if(!id) return;
    var productdata=getProductData(id);
    if(!productdata) return;
    //if(!Array.isArray(productdata)) return;
    //if(productdata.length<3) return;

    document.getElementsByTagName("title")[0].innerText=productdata.title;
    var productimagebanner=document.getElementById("productimagebanner");
    var productimagespan=document.getElementById("productimagespan");
    var productlink=document.getElementById("productlink");
    var productatt=document.getElementById("productatt");
    var tblink="https://item.taobao.com/item.htm?id="+productdata.id;
    document.getElementById("productimageleft").addEventListener("click",onimagebannershow,false);
    document.getElementById("productimageright").addEventListener("click",onimagebannershow,false);
    productimagebanner.style.width=(productdata.img.length)*100+"vw";
    for(i=0;i<productdata.img.length;i++){
        var tblinkimg="https://img.alicdn.com/imgextra/i1/2200740969161/"+productdata["img"][i]+"_!!2200740969161.jpg";
        var img=document.createElement("img");
        img.src=tblinkimg;
        var imgdiv=document.createElement("li");
        imgdiv.appendChild(img);
        productimagebanner.appendChild(imgdiv);
        
        var span=document.createElement("span");
        if(i==0){
            span.className="imagebannerdotshow";   
        }
        span.setAttribute("data-num",i);
        span.addEventListener("click",onimagebannershow,false);
        productimagespan.appendChild(span);
    }
    var p=document.getElementById("producttitle");
    p.innerText=productdata.title;
    if(productdata.att!=null && productdata.att.length>0){
        for(i=0;i<productdata.att.length;i++){
            var span=document.createElement("span");
            span.innerText=productdata["att"][i];
            productatt.appendChild(span);
            if(i<(Math.ceil(productdata.att.length/3)-1)*3){
                addClass(span,"bottomborder");
            }
            if(i%3!=2){
                addClass(span,"rightborder");
            }
        }
    } 
    productlink.href=tblink;

}
function onimagebannershow(){
    var num=this.getAttribute("data-num");
    var nowshow=document.getElementsByClassName("imagebannerdotshow")[0];
    var nownum=nowshow.getAttribute("data-num");
    if(num==nownum) return;
    nowshow.className="";
    var span=document.getElementById("productimagespan").getElementsByTagName("span");
    var ul=document.getElementById("productimagebanner");

    var direction="b";
    if(num=="b"){
        nownum--;
        if(nownum<0) nownum=span.length-1;
    }
    else if(num=="f"){
        direction="f"
        nownum++;
        if(nownum>span.length-1)nownum=0;
    }else{
        if(nownum<num) direction="f";
        nownum=num;
    }
    ul.style.left="-"+nownum*100+"vw";
    span[nownum].className="imagebannerdotshow";
}