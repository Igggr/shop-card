let wl;
let shopCard;

$(function() {
    wl = new WishList();
    shopCard = new ShopCard();
    updateGoalCoord(goalCoord);
    let rw = $(".row").children().children(".row");   //TODO: rewrite more accuratly
    console.log(productsDict);
    
    
    for (let key in productsDict) {
        let product = productsDict[key];
        console.log(product);
        rw.append(productDiv(product));
    }
   
    var products = $(".col.col-xs-12.col-md-6.col-lg-4");
    products.append(WagonPusher.makeWagon());
    products.append($("<img/>", {src: CardioStimulator.hollowHeartImage , class: "heart"}))
    $(".wagon").click(WagonPusher.wagonMove);
    $(".heart").click(CardioStimulator.toggleLike);
    $("#wishList").click( () => wl.toggleWishList() );
    //$("#wishList").click( wl.toggleWishList );    //what the difference
    
    products.each((ind, ob) => $(ob).children(".info").click(showFullDescription) );

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
               ${product.description} <img class="sign info" src="images/info.png">
               
               <p>${product.price}$</p>
            </div>`          
}

function showFullDescription() { //TODO: show full description
    //$(this).css("background-color", "red"
    let id = idOfClickedProduct($(this));  
    let full_descr = productsDict[id]["full_descr"];
    console.log(id, full_descr);  
    alert(`${full_descr}`)
}