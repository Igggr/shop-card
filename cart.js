let wl = new WishList();
let shopCard;


$(function() {
    shopCard = new ShopCard();
    shopCard.card.append("<p>your order can be here</p>");

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
    products.append($("<img/>", {src: CardioStimulator.hollowHeartImage , class: "heart"}))
    $(".wagon").click(animationThenAddToCart);
    $(".heart").click(CardioStimulator.toggleLike);
    
    $("#wishList").click( () => wl.showWishList() );
    //$("#wishList").click( wl.showWishList );    //what the difference
    
    
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
    //blink( divWithImage(clickedEl), 500);
    wagonMove(clickedEl);
}

function makeWagon () {
    return $("<img/>", {src: wagonImage , class: "wagon"});
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
    shopCard.addToCard(id);
    removeWagon(wagon);
}

function removeWagon(wagon) {
    wagon.detach();
}

function showFullDescription() { //TODO: show full description
    alert("not ready");    
    let id = idOfClickedProduct($(this));   //undefined ?
    let description = productsDict[id]["name"];
    console.log(id, description);    
}