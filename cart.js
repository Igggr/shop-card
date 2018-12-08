$(function() {
    updateGoalCoord(goalCoord);
    let rw = $(".row").children().children(".row");   //TODO: rewrite more accuratly
    console.log(productsDict);
    
    
    for (let key in productsDict) {
        let product = productsDict[key];
        console.log(product);
        rw.append(productDiv(product))
    }
   
    var products = $(".col.col-xs-12.col-md-6.col-lg-4");
    products.append(makeWagon());
    products.append($("<img/>", {src: hollowHeartImage , class: "heart"}))
    $(".wagon").click(animationThenAddToCart);
    $(".heart").click(toggleFavorite);
    $("#wishList").click(showWishList);
    products.children().eq(2).click(showFullDescription); //only for first product ?

});

function productDiv(product) { //TODO: more jquery-way
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

function animationThenAddToCart() { 
    let clickedEl = $(this);
    blink( divWithImage(clickedEl), 500);
    wagonMove(clickedEl);
}

function blink(element, time) {
     element.animate({left: "1000px", opacity:.1}, time)
            .animate({left: "1000px", opacity:1}, time);
}

function makeWagon () {
    return $("<img/>", {src: 'images/wagon.png' , class: "wagon"});
}


function wagonMove(clickedEl) { //TODO: wagon must move from the place were he is drawn
    let id = idOfClickedProduct(clickedEl);
    let wagon = makeWagon();
    $("nav").append(wagon);
    wagon.animate({left: goalCoord[0], top: goalCoord[1], opacity: 0.3, width: '200px' }, 
                  1500, 
                  () => finishAnimation(id, wagon)
                 );  
     
}

function finishAnimation(id, wagon) {
    addToCard(id);
    removeWagon(wagon);
}

function removeWagon(wagon) {
    wagon.detach();
}

function addToCard(id) {
    let price = productsDict[id]["price"];
    console.log(`product in the shopping card: ${productsDict[id]["name"]}, price: "${price}"`)
    updateCostOfOrder(price);
    removeOldShoppingCartForm();
    newShoppingCartForm(id);
}

function productFromId(id) {
    return products[id];
}

function removeOldShoppingCartForm() {
    $(".cart").empty();
}

function newShoppingCartForm(id) {
   if (id in productsToOder) {
       console.log("alrready added, just increase ammount");
       productsToOder[id] += 1;
   } else {
       console.log("wasn't there before, added the first time");
       productsToOder[id] = 1;   
   }
   for (id in productsToOder){
       showProductInShoppingCard(id)
   }
   showCosts();
}
                    
function showProductInShoppingCard(id) {
    let name = productsDict[id]["name"];
    let ammount = productsToOder[id];
    $(".cart").append(`<p>${name}: ${ammount}</p>`);      
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

function calcTaxRate(price) {   //ToDo: Depend on?
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
    else 
        askzForCorrectInfo();
}

function infoIsCorrect() { //TODO: check is data iscorrect to confirm order
    
}

function askForCorrectInfo() {
    
}

function divWithImage(whereClicked) {
    return whereClicked.siblings().eq(0);
}

function idOfClickedProduct(whereClicked) {
    return whereClicked.parent().children().eq(0).attr("id");
}

function toggleFavorite() {
    let heart = $(this);
    let divWithImage = idOfClickedProduct(heart);
    heartBeat(heart);
    let id = idOfClickedProduct(heart);
    let ind = wishList.indexOf(id); 
    if ( ind == -1 ) 
        addToFavorite(id, heart);
    else
        removeFromFavorite(ind, heart);
}

function addToFavorite(id, heart) {
    console.log(`adding to wish list product with id: ${id}`);
    heartToFull(heart);
    wishList.push(id);  
}

function removeFromFavorite(ind, heart) {
    console.log(`removing product ${wishList[ind]} from favorite`);
    heartToHollow(heart);
    wishList.splice(ind, 1);
}

function heartBeat(heart) {
    heart.animate({width: bigHeartSize}, 500);
    heart.animate({width: smallHeartSize}, 500);
}

function heartToHollow(heart) {
    heart.attr("src", hollowHeartImage);
}

function heartToFull(heart) {
    heart.attr("src", fullHeartImage);
}

function showWishList() { //TODO: wishList
    console.log("in wish list:");
    wishList.forEach(function(id){  
        console.log(id, productsDict[id]["description"]);
    })
}

function showFullDescription() { //TODO: show full description
    alert("not ready");    
    let id = idOfClickedProduct($(this));   //undefined ?
    let description = productsDict[id]["name"];
    console.log(id, description);    
}