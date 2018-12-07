var subTotal = 0;
var tax = 0;
var totalWithTax = 0;
var products = [];

$(function() {
    var products = $(".col.col-xs-12.col-md-6.col-lg-4");
    var btn = $('<input/>').attr({
                                 type: "button",
                                 value: "add"
                                });
    products.append(btn);
    $("input").click(addToCart);
});

function addToCart() { 
    let prc = $(this).prev();
    let $price = prc.text();
    let prd = prc.prev();
    let product = prd.text();
    console.log(`added product : ${product}, price: "${$price}"`)
    price = parseInt( $price.slice(1) );
    updateCostOfOrder(price);
    removeOldShoppingCartForm();
    showNewShoppingCartForm(product);
}

function removeOldShoppingCartForm() {
    $(".cart").empty();
}

function showNewShoppingCartForm(product) {
   $(".cart").append("<b>your order:<b>");
   let ind = -1;
   if (ind != -1) {
       console.log("alrready added, just increase ammount");
       products[product] += 1;
   } else {
       console.log("wasn't there before, added the first time");
       products.push({product : 1});   
   }
   console.log(products);
   products.forEach( (item)=> {
       showProductInShoppingCard(item);
       console.log("forEach:")
       console.log(item);
   });
   showCosts();
}
   
                    
function showProductInShoppingCard(item) {
    let product = "pr";
    let ammount = 0;
    $(".cart").append(`<p>${product}: ${ammount}</p>`);      
} 

function showCosts(){
   $(".cart").append(`<p>Subtotal: ${subTotal}</p>`)
             .append(`<p>Tax: ${tax}</p>`)
             .append(`<p>Price With Tax: ${totalWithTax}</p>`);
}

function updateCostOfOrder(price) {
    let taxRate = calcTaxRate(price);
    subTotal += price;
    tax += calculateTax(price, taxRate);
    totalWithTax += priceWithTax(price, taxRate);
}

function calcTaxRate(price) {   //ToDo: Depend on zipCode?
    return 0.18;
}

function calculateTax(price, taxRate) {
    return taxRate * price;
}

function priceWithTax(price, taxRate) {
    return price + calculateTax(price, taxRate);
}

function order() {
    if (infoIsCorrect())
        placeOrder();
}

function infoIsCorrect() {
    
}