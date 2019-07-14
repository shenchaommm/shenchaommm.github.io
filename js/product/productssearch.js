function productsSearch(keywords,num){
    if(!keywords) keywords="所有产品";
    var productslistData;
    if(keywords=="所有产品"||keywords=="儿童袜子"||keywords=="袜子"){
        productslistData=getProductsData();
    }else{
        productslistData=getProductDataByKeywords(keywords);
    }
    
    if(!productslistData) {
        return false;
    }
    if(!Array.isArray(productslistData)) {
        return false;
    }
    if(productslistData.length>num & num>0){
        productslistData.length=num;
    }
    var productslist=document.getElementById("productslist");
    for(i=0;i<productslistData.length;i++){
        if(!Array.isArray(productslistData[i])) continue;
        if(productslistData[i].length<3) continue;
        var productdiv=document.createElement("div");
        var productdivimg=document.createElement("img");
        productdivimg.src="https://gd2.alicdn.com/imgextra/i1/2200744094901/"+productslistData[i][2]+"_!!2200744094901.jpg";
        var producttitle=document.createElement("p");
        producttitle.innerText=productslistData[i][1];
        var productbutton=document.createElement("a");
        productbutton.innerHTML="<span>去看看</span>";
        productbutton.href="product.html?id="+productslistData[i][0];
        productdiv.appendChild(productdivimg);
        productdiv.appendChild(producttitle);
        productdiv.appendChild(productbutton);
        productslist.appendChild(productdiv);
    }
    return true;
}
