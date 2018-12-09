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
        this.addToProductsToOrder(id);
        this.newShoppingCartForm();
    }
    
    addToProductsToOrder(id) {
        console.log(this.productsToOrder)
        if (id in this.productsToOrder) {
           console.log("alrready added, just increase ammount");
           this.productsToOrder[id] += 1;
        } else {
           console.log("wasn't there before, added the first time");
           this.productsToOrder[id] = 1;   
        }
    }
    
    removeOldShoppingCartForm() {
        this.card.empty();
    }

    
    newShoppingCartForm() {   
        this.removeOldShoppingCartForm();
        this.showAllProductsInShoppingCard();
        this.showCosts();
    }
    
    
    showAllProductsInShoppingCard() {
         for (var prodId in this.productsToOrder){
           this.showProductInShoppingCard(prodId)
        }
    }
    
    showProductInShoppingCard(id) {
        console.log(`showing product with id ${id}`);
        let name = productsDict[id]["name"];
        let ammount = this.productsToOrder[id];
        this.card.append(`${name}: ${ammount}`);  
        this.card.append(this.plus(id));
        this.card.append(this.minus(id));
        this.card.append("<br>");
    } 
    
    showCosts(){
        console.log(`with tax it will cost ${this.priceWithTax}`)
        this.card.append("<br>")
                 .append(`<p>Subtotal: ${this.priceWithoutTax}`)
                 .append(`<p>Tax: ${this.tax}</p>`)
                 .append(`<p>Price With Tax: ${this.priceWithTax}</p>`);
    }
    
    plus(id) {
        let plus_ = $("<img class='plusminus' src = images/plus.png>");
        plus_.click(() => this.addToCard(id));
        return plus_;
    }
    
    minus(id) {
        let minus_ = $("<img class='plusminus' src = images/minus.png>");
        minus_.click(() => this.removeFromCard(id));
        return minus_;
    }
    
    removeFromCard(id) { //TODO: implement
        console.log("removing...");
        if (this.productsToOrder[id] == 1) {
            delete this.productsToOrder[id];
        } else 
            this.productsToOrder[id] -= 1;
        this.newShoppingCartForm();
        
        
    }
}



