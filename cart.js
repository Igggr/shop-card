

$(function() {
    updateGoalCoord(goalCoord);
    let rw = $(".row").children().children(".row");   //TODO: rewrite more accuratly
    console.log(productsList);
    productsList.forEach(function(product){
        rw.append(productDiv(product));
        //rw.html( rw.html() + productDiv(product));        
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
    /*
    let dv = $("div").attr("id", product.id);
    console.log("div..");
    console.log(dv);
    let innDv = $("div").html(`<img src=images/${product.image}>`);
    dv.append(innDv);
    dv.append(`<h2>${product.name}</h2>`);
    dv.append(`<h2>${product.description}</h2>`);
    dv.append(`<h2>${product.price}</h2>`);
    console.log(dv);
    return dv;
    */
    return `<div class="col col-xs-12 col-md-6 col-lg-4">
               <div id ="${product.id}">
                  <img class="product" src=images/${product.image}>
               </div>
               <h2>${product.name}</h2>
               <p>${product.description}</p>
               <p>\$${product.price}</p>
            </div>`
           
}


function animationThenAToCart() { 
    $(this).prev().prev().prev().prev().css("background-color", "red").animate({left: "1000px", opacity:0.1}, 700);
    let prcTag = $(this).prev();
    let price = parseFloat(prcTag.text().slice(1));
    let product = prcTag.prev().text();
    console.log(`added product : ${product}, price: "${price}"`)
    wagonMove(price, product)
    //updateCostOfOrder(price);
    //removeOldShoppingCartForm();
    //showNewShoppingCartForm(product);
}

function makeWagon () {
    return $("<img/>", {src: 'images/wagon.png' , class: "wagon"});
}


function wagonMove(price, product) { //TODO: wagon must move
    let wagon = makeWagon();
    $("body").append(wagon);
    wagon.animate({left: goalCoord[0], top: goalCoord[1], opacity: 0.3, width: '200px' }, 
                  1500, 
                  () => addToCard(price, product)
                 );
    //wagon.moveTo(window.innerWidth, 0);
    //$("body").append("<img src = 'images/wagon.png'>");
    //.animate({left: "+=1000px"}, 7000);
    replaceWagon();
    
}

function replaceWagon() {
    
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
   let ind = -1;                                        //TODO: does the product already in shopping list?
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

function findInAlreadyAdded(product) {}
                    
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