function productsSearch(keywords,num){
    var productslistData=getProductDataByKeywords(keywords);
    if(!productslistData) {
        return false;
    }
    if(!Array.isArray(productslistData)) {
        return false;
    }
    var productslist=document.getElementById("productslist");
    var l=productslistData.length;
    if(l>num && num>0){
        l=num;
    }
    for(i=0;i<l;i++){
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
    if(productslistData.length>num && num>0){
        var div=document.createElement("div");
        var a=document.createElement("a");
        a.href="productslist.html?keywords="+keywords;
        a.innerHTML="<p><span class='iconfont icon-right'></span></p>查看更多";
        div.appendChild(a);
        div.className="searchmoreproducts";
        productslist.appendChild(div);
    }

    return true;
}
