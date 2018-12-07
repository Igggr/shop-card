let subTotal = 0;
let tax = 0;
let totalWithTax = 0;
let productsToOder = [];
let wagonImage = "images/wagon.png";
let goalCoord = [0, 0];   //wagons will move here

var productsList = 
        [productInfo("The Ring", 999999, "invisibility + 1000", "one ring for", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),
        productInfo("Silmaril", 77777, "beateful stones", "was created in first epoch", generateId(), "ring.jpg"),            
        ];

function productInfo(name_, price_, description_, full_descr_, id_, image_){
    return {name: name_, price: price_, description: description_, full_descr: full_descr_, id: id_, image: image_};
}

function closure() {
    let n = 0;
    return () => n++;
}

function increasingNumbers() {
    return closure(); 
}

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