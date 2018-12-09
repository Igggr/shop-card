class WishList {  
    
    constructor (){
        this.wishList = [];
    }
    
    addTo(productId) {
        console.log(`adding to wishList....${productId}`)
        this.wishList.push(productId);
        console.log(this.wishList);
    }
    
    removeFrom(ind) {
        console.log(`remove from  wishList.... item om index ${ind}`)
        this.wishList.splice(ind, 1); 
        console.log(this.wishList);
    }
    
    toggleProduct(productId) {
        let ind = this.wishList.indexOf(productId);
        if (ind == -1)
            this.addTo(productId);
        else 
            this.removeFrom(ind);
        return ind == -1;     //true if we added product, so now it is in wish list
    }
    
    showWishList() {  //TODO: actuallly show, not only write in console
        console.log("in class WishList:");
        console.log(this.wishList);
        this.wishList.forEach(function(id){ 
            console.log(id, productsDict[id]["name"]);
        });      
    }
    
}