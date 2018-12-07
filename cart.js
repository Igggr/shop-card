let subTotal = 0;
let tax = 0;
let totalWithTax = 0;
let productsToOder = [];

var productsList = 
        [productInfo("The Ring", 999999, "invisibility + 1000", "one ring for", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", "ring.jpg"),            
        ]

function productInfo(name_, price_, description_, full_descr_, image_){
    return {name: name_, price: price_, description: description_, full_descr: full_descr_, image: image_};
}



$(function() {
    let rw = $(".row").children().children(".row");   //TODO: rewrite more accuratly
    console.log(productsList);
    productsList.forEach(function(product){
        rw.html( rw.html() + productDiv(product));        
    });

    var products = $(".col.col-xs-12.col-md-6.col-lg-4");
    var btn = $('<input/>').attr({
                                 type: "button",
                                 value: "add"
                                });
    products.append(btn);
    $("input").click(animationThenAToCart);
});

function productDiv(product) {
    return `<div class="col col-xs-12 col-md-6 col-lg-4">
               <div>
                  <img src=images/${product.image}>
               </div>
               <h2>${product.name}</h2>
               <p>${product.description}</p>
               <p>\$${product.price}</p>
           </div>`
}


function animationThenAToCart() { 
    let prcTag = $(this).prev();
    let price = parseFloat(prcTag.text().slice(1));
    let product = prcTag.prev().text();
    console.log(`added product : ${product}, price: "${price}"`)
    wagonMove(price, product)
    //updateCostOfOrder(price);
    //removeOldShoppingCartForm();
    //showNewShoppingCartForm(product);
}

function wagonMove(price, product) { //TODO: wagon must move
    addToCard(price, product);
}

function addToCard(price, product) {
    console.log(`product in the shopping card: ${product}, price: "${price}"`)
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
       productsToOder[product] += 1;
   } else {
       console.log("wasn't there before, added the first time");
       productsToOder.push({product : 1});   
   }
   console.log(productsToOder);
   productsToOder.forEach( (item)=> {
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