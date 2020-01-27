function productsSearch(keywords,num){
    if(!keywords) keywords="所有产品";
    var productslistData;
    if(keywords=="所有产品"||keywords=="创思照明"||keywords=="Chance"||keywords=="创思"){
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
        //if(!Array.isArray(productslistData[i])) continue;
        //if(productslistData[i].length<3) continue;
        var productdiv=document.createElement("div");
        var productdivimg=document.createElement("img");
        productdivimg.src="https://img.alicdn.com/imgextra/i1/2200740969161/"+productslistData[i]["img"][0]+"_!!2200740969161.jpg";
        var producttitle=document.createElement("p");
        producttitle.innerText=productslistData[i].title;
        var productbutton=document.createElement("a");
        productbutton.innerHTML="<span>去看看</span>";
        productbutton.href="product.html?id="+productslistData[i].id;
        productdiv.appendChild(productdivimg);
        productdiv.appendChild(producttitle);
        productdiv.appendChild(productbutton);
        productslist.appendChild(productdiv);
    }
    return true;
}
