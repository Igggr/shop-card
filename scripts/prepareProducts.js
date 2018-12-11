let goalCoord = [0, 0];   //wagons will move here
let productsDict = {};

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

addProductInfo("The Ring", 9999999, "invisibility+1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("Light sword", 350, "atack +50", "all djeday must have one", generateId(), "light_sword.jpg");
addProductInfo("The four leaf clover", 500, "luck +1", "want to be a luckier one?", generateId(), "clover.jpg");
addProductInfo("Magic book", 750, "import spells", "magic for 21 day", generateId(), "magicBook.png");
addProductInfo("The lamp", 99997, "your wishes come true", "lamps with signes of usage can't be returned to seller", generateId(), "lamp.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
addProductInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg");
