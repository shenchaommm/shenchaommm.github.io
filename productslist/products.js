function getProductsData(){
    var productsArray=[];
    productsArray[0]=["591707103172","夏季薄款网眼宝宝棉袜婴儿中筒透气男童女童袜彩棉无骨儿童袜子",
    "O1CN01DgnPwN1m4hevFuMr0","O1CN01Z3keuC1m4herzmqoa","O1CN01snR0ex1m4hesodXKo","O1CN01vERjhY1m4heh8hvZx","彩棉"];
    productsArray[1]=["589403973487","夏季超薄天然有机彩棉宝宝袜子儿童新生婴儿袜无骨网眼透气短袜",
    "O1CN01VU5fFm1m4hehuAMJl","O1CN01EMJibc1m4her3ThYe","O1CN01dczh7z1m4hehx7IgR","O1CN01LCypxZ1m4hduzBEWX","彩棉"];
    productsArray[2]=["589938573629","夏季薄款网眼透气短袜天然有机彩棉新生婴儿宝宝船袜花边纯棉袜子",
    "O1CN01CafofD1m4heitz8Jh","O1CN01LMYIk21m4herAocOE","O1CN01H7kAPD1m4hedS0ZEM","O1CN01HBO5Mx1m4heYtSWEk","彩棉"];
    productsArray[3]=["590925473308","夏季薄款宝宝防蚊袜网眼透气新生儿长筒过膝超薄儿童彩棉婴儿袜",
    "O1CN01scyeCj1m4hdvod1SO","O1CN01nUnF4B1m4he0Bew3B","O1CN01C190BA1m4hdFrpNM1","彩棉"];
    productsArray[4]=["595180536672","夏季薄款新生儿宝宝短袜婴儿网眼袜全棉纯色松口透气无骨儿童袜子",
    "O1CN01FDKjYQ1m4heQoslOv","O1CN01YVvN0b1m4heNrwRaW","O1CN01hMctag1m4hePxdLsj","O1CN01YT5bxS1m4heGnG8Wa","O1CN01cdrFV31m4heRHhHS1","精梳棉"];
    return productsArray;
}
function getProductData(idn){
    var data=getProductsData();
    if(!data) return null;
    if(!Array.isArray(data)) return null;

    var product=null;
    for(i=0;i<data.length;i++){
        if(data[i][0]==idn) {
            product=data[i];
            break;
        }
    }
    return product;

}
function getProductDataByKeywords(key){
    var keywords=key.split(" ");
    var data=getProductsData();
    if(!data) return null;
    if(!Array.isArray(data)) return null;
    var products=[];
    for(i=0;i<data.length;i++){
        var m=0;
        var datastr=data[i].join(" ");
        for(j=0;j<keywords.length;j++){
            if(datastr.match(keywords[j])){
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