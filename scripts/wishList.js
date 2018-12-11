class WishList {  
    
    constructor (){
        this.wishList = [];
        this.place = $("#wishListWindow");
        this.shownRightNow = false;
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
        if (this.shownRightNow) 
            this.showWishList();
        return ind == -1;     //true if we added product, so now it is in wish list
    }
    
    toggleWishList() {
        if (this.shownRightNow)
            this.hideWishList();
        else
            this.showWishList();
    }
    
    showWishList() {  //TODO: actuallly show, not only write in console
        console.log(this.wishList);
        this.hideWishList();
        if (this.wishList.length === 0)
            this.showEmtyWishList();
        else
            this.showNonEmptyWishList();
        this.shownRightNow = true;
    }
        
    showNonEmptyWishList() {
        let liked = "";
        this.wishList.forEach(function(id){ 
            console.log(id, productsDict[id]["name"]);
            liked += `<li>${productsDict[id]["name"]}</li>`
        }); 
        this.place.append("you liked following products")
                  .append(`<ul>${liked}</ul>`);
    }
    
    showEmtyWishList() {
        console.log("nothing in your wishList");
        this.place.append("you doesn't add anything to wish list))");
    }
    
    hideWishList() {
        this.place.empty();
        this.shownRightNow = false;
    }
    
}