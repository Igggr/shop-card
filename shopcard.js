class ShopCard {
    constructor () {
        this.productsToOrder = [];
        this.card = $(".cart");   //wil be find only once
        this.priceWithoutTax = 0;
        this.tax = 0;
        this.priceWithTax = 0;
    }
      
    addToCard(id) {
        let price = productsDict[id]["price"];
        console.log(`product in the shopping card: ${productsDict[id]["name"]}, price: "${price}"`)
        Accounter.updateCostOfOrder(price, this);  
        this.removeOldShoppingCartForm();
        this.newShoppingCartForm(id);
    }
    
    removeOldShoppingCartForm() {
        this.card.empty();
    }

    
    newShoppingCartForm(id) {
        console.log(this.productsToOrder)
        if (id in this.productsToOrder) {
           console.log("alrready added, just increase ammount");
           this.productsToOrder[id] += 1;
        } else {
           console.log("wasn't there before, added the first time");
           this.productsToOrder[id] = 1;   
        }
    
        for (id in this.productsToOrder){
           this.showProductsInShoppingCard(id)
        }
        this.showCosts();
    }
    
    showProductsInShoppingCard(id) {
        console.log(`showing product with id ${id}`);
        let name = productsDict[id]["name"];
        let ammount = this.productsToOrder[id];
        this.card.append(`<p>${name}: ${ammount}</p>`);  
    } 
    
    showCosts(){
        console.log(`with tax it will cost ${this.priceWithTax}`)
        this.card.append(`<p>Subtotal: ${this.priceWithoutTax}</p>`)
                 .append(`<p>Tax: ${this.tax}</p>`)
                 .append(`<p>Price With Tax: ${this.priceWithTax}</p>`);
    }
}