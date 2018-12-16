class WishList {

    constructor() {
        this.wishList = [];
        this.wishModalBody = $("#inWishList");
    }

    updateModalContent() {
        if (this.wishList.length == 0)
            this.wishModalBody.html("wishlist is empty");
        else {
            this.wishModalBody.empty();
            let content = "";
            for (let i=0; i< this.wishList.length; i++) {
                let id = this.wishList[i];
                content += `<p>${i+1}: ${productsDict[id]["name"]}</p>`;
            }
            this.wishModalBody.html(content);
        }
    }

    addTo(productId) {
        this.wishList.push(productId);
    }

    removeFrom(ind) {
        this.wishList.splice(ind, 1);
    }

    toggleProduct(productId) {
        console.log(`product ${productId} toggled in wishlist`);
        let ind = this.wishList.indexOf(productId);
        if (ind == -1)
            this.addTo(productId);
        else
            this.removeFrom(ind);
        this.updateModalContent();
        return ind == -1;
    }

}
