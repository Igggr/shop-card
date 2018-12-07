let subTotal = 0;
let tax = 0;
let totalWithTax = 0;
let productsToOder = {};
let wagonImage = "images/wagon.png";
let goalCoord = [0, 0];   //wagons will move here
let productsDict = {};
let wishList = [];

function addProductInfo(name_, price_, description_, full_descr_, id_, image_){
    //console.log(`adding product with id: ${id_}`);
    productsDict[id_] = {name: name_, 
                         price: price_, 
                         description: description_, 
                         full_descr: full_descr_, 
                         id: id_, 
                         image: image_};
}

function closure() {
    let n = 0;
    return () => n++;
}

let increasingNumbers = closure();

function generateId() { 
    return `productId#${increasingNumbers()}`; 
}
/*
$(window).resize() {
    updateGoalCoord(goalCoord);
}
*/
function updateGoalCoord(goalCoord) {
    goalCoord[0] = window.innerWidth-300;
    goalCoord[1] = 200;
}

addProductInfo("The Ring", 999999, "invisibility+1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
