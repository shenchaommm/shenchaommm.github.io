addLoadEvent(initProduct);
function initProduct(){
    var id=getQueryVariable("id");
    
    if(!id) return;
    var productdata=getProductData(id);
    if(!productdata) return;
    if(!Array.isArray(productdata)) return;
    if(productdata.length<3) return;

    document.getElementsByTagName("title")[0].innerText=productdata[1];
    var productimagebanner=document.getElementById("productimagebanner");
    var productimagespan=document.getElementById("productimagespan");
    var productlink=document.getElementById("productlink");
    var tblink="https://item.taobao.com/item.htm?id="+productdata[0];
    document.getElementById("productimageleft").addEventListener("click",onimagebannershow,false);
    document.getElementById("productimageright").addEventListener("click",onimagebannershow,false);
    productimagebanner.style.width=(productdata.length-2)*100+"vw";
    for(i=2;i<productdata.length-1;i++){
        var tblinkimg="https://gd2.alicdn.com/imgextra/i1/2200744094901/"+productdata[i]+"_!!2200744094901.jpg";
        var img=document.createElement("img");
        img.src=tblinkimg;
        var imgdiv=document.createElement("li");
        imgdiv.appendChild(img);
        productimagebanner.appendChild(imgdiv);
        
        var span=document.createElement("span");
        if(i==2){
            span.className="imagebannerdotshow";   
        }
        span.setAttribute("data-num",i-2);
        span.addEventListener("click",onimagebannershow,false);
        productimagespan.appendChild(span);
    }
    var p=document.getElementById("producttitle");
    p.innerText=productdata[1];

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