addLoadEvent(initIndex);
function initIndex(){
        loadJS("productslist/products.js",inithotproduct);
        loadCSS("css/hotproduct.css");
    
        //for(i=0;i<4;i++){
            //alert(hp[i]);
            //var productdata=getProductData(hp[i]);

            //var div=document.createElement("div");
            //if(!productdata) return;
            //console.log(productdata);
            //var h=document.createElement("h3");
            //h.innerText=productdata[0].model;
            //var p=document.createElement("p");
            //p.innerText=productdata[0].des;
            //var img=document.createElement("img");
            //img.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+productdata[0]["img"][0]+"_!!2200740969161.jpg";
            //var a=document.createElement("a");
            //a.href="product.html?id="+hp[i];
            //a.innerText="立即购买";
            //div.appendChild(img);
            //div.appendChild(h);
            //div.appendChild(p);
            //div.appendChild(a);
            //hpdiv.appendChild(div);
            //alert(hp[i]);
}
function inithotproduct(){
    var hp=[];
    hp=gethotcontent();
    if(!hp) return;
    var hpdiv=document.getElementById("hotproductslist");
    console.log(hp);
    var productdata=getProductData(hp);
    console.log(productdata);
    if(productdata||productdata.length>0){
        for(i=0;i<productdata.length;i++){
            var div=document.createElement("div");
            var div1=document.createElement("div");
            var h=document.createElement("h3");
            h.innerText=productdata[i].model;
            var p=document.createElement("p");
            p.innerText=productdata[i].des;
            var img=document.createElement("img");
            img.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+productdata[i]["img"][0]+"_!!2200740969161.jpg";
            var a=document.createElement("a");
            a.href="product.html?id="+productdata[i].id;
            a.innerText="立即购买";
            div.appendChild(img);
            div1.appendChild(h);
            div1.appendChild(p);
            div1.appendChild(a);
            div.appendChild(div1);
            hpdiv.appendChild(div);
        }
    }
}