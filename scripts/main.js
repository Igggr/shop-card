let wl;
let shopCard;

$(function () {
    wl = new WishList();
    shopCard = new ShopCard();
    updateGoalCoord(goalCoord);
    let rw = $(".row").children().children(".row"); //TODO: rewrite more accuratly
    console.log(productsDict);


    for (let key in productsDict) {
        let product = productsDict[key];
        console.log(product);
        rw.append(productDiv(product));
    }

    var products = $(".col.col-xs-12.col-md-6.col-lg-4");
    products.prepend(WagonPusher.makeWagon());
    products.prepend($("<img/>", {
        src: CardioStimulator.hollowHeartImage,
        class: "heart"
    }))
    $(".wagon").click(WagonPusher.wagonMove);
    $(".heart").click(CardioStimulator.toggleLike);
    $("#wishList").click(() => wl.toggleWishList());
    //$("#wishList").click( wl.toggleWishList );    //what the difference

    products.each((ind, ob) => $(ob).children(".info").click(ProductShowCase.showFullDescription));

});

function productDiv(product) { //TODO: more jquery-way
    return `<div class="col col-xs-12 col-md-6 col-lg-4">
               <div class="imageHolder" id ="${product.id}">
                  <img class="product" src=images/${product.image}>
               </div>
               <h2>${product.name}</h2>
               ${product.description} <img class="sign info" src="images/info.png">
               
               <p>${product.price}$</p>
            </div>`
}
