class Accounter {  
    static calcTaxRate(price) { return 0.18; }
    
    static updateCostOfOrder(priceAdded, shopCard) {
        let taxAdded = priceAdded * this.calcTaxRate(priceAdded);
        console.log(`accounter count... ading price ${priceAdded}, additional tax is ${taxAdded}`)
        shopCard.priceWithoutTax += priceAdded;
        shopCard.tax += taxAdded;
        shopCard.priceWithTax += priceAdded + taxAdded;
    } 
}